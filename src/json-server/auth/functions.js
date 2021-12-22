var functions = function (jwt, CONFIG) {
  return {
    register(req, res) {
      const { username, email, password } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      var user = db.get("users").find({ username }).value() || db.get("users").find({ email }).value();

      if (user) {
        res.status(409).jsonp("Username and/or email already in use");
        return;
      }

      try {
        user = db.get("users").insert({ email, username, password, verified: false }).write();
        db.get("verify_urls")
          .insert({ user_id: user.id, url: `/auth/confirm-email/${user.id}/testHash123?expires=never&signature=testSignature123` })
          .write();
      } catch (err) {
        throw Error('You must add a "users" and "verify_urls" collection to your db');
      }

      res.status(201).jsonp();
    },

    login(req, res) {
      const { username, password } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ username, password }).value();

      if (!user) {
        res.status(404).jsonp("Wrong username and/or password");
        return;
      }

      if (!user.verified) {
        res.status(403).jsonp("User is not verified");
        return;
      }

      token = jwt.sign({ username: user.username, email: user.email }, CONFIG.JWT_SECRET_KEY, {
        expiresIn: CONFIG.JWT_EXPIRES_IN,
        subject: String(user.id),
      });
      if (token) res.status(200).jsonp({ token });
      else res.status(500).jsonp("Something went wrong");
    },

    forgotPassword(req, res) {
      const { email } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ email }).value();

      if (!user) {
        res.status(404).jsonp("Wrong email");
        return;
      }

      if (!user.verified) {
        res.status(403).jsonp("User is not verified");
        return;
      }

      const token = "testToken1234";

      const url = `http://localhost:4200/reset-password?token=${token}`;

      try {
        db.get("reset_tokens").insert({ user_id: user.id, token }).write();
      } catch (err) {
        throw Error('You must add a "reset_tokens" collection to your db');
      }
      res.status(200).jsonp();
    },

    resetPassword(req, res) {
      const { password } = req.body;
      const token = req.query["token"];
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const reset_token = db.get("reset_tokens").find({ token }).value();

      if (!reset_token) {
        res.status(404).jsonp("Token not found");
        return;
      }

      if (!user.verified) {
        res.status(403).jsonp("User is not verified");
        return;
      }

      try {
        db.get("reset_tokens").remove({ token }).write();
        db.get("users").find({ id: reset_token.user_id }).assign({ password }).write();
      } catch (err) {
        throw Error('You must add a "forgotPassword" collection to your db');
      }
      res.status(200).jsonp();
    },

    changePassword(req, res) {
      const { old_password, new_password } = req.body;
      const jwtHeader = req.headers["authorization"].replace("Bearer ", "");
      try {
        var claims = jwt.verify(jwtHeader, CONFIG.JWT_SECRET_KEY);
      } catch (err) {
        res.status(401).jsonp();
      }

      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ id: Number(claims.sub), password: old_password });

      if (!user.value()) {
        res.status(404).jsonp("Token not found");
        return;
      }

      try {
        user.assign({ password: new_password }).write();
      } catch (err) {
        throw Error('You must add a "users" collection to your db');
      }
      res.status(200).jsonp();
    },

    confirmEmail(req, res) {
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const verify_url = db
        .get("verify_urls")
        .find({ url: `${req.url}` })
        .value();

      if (!verify_url) {
        res.status(404).jsonp("Token not found");
        return;
      }

      try {
        db.get("verify_urls").remove({ url: req.url }).write();
        const user = db.get("users").find({ id: verify_url.user_id });
        user.assign({ verified: true }).write();
      } catch (err) {
        throw Error('You must add a "users" collection to your db');
      }
      res.status(200).jsonp();
    },

    resendEmail(req, res) {
      const { email } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ email }).value();

      if (!user) {
        res.status(404).jsonp("Email not found");
        return;
      }

      if (user.verified) {
        res.status(403).jsonp("User is already verified");
        return;
      }

      const url = `/auth/confirm-email/${user.id}/testHash123?expires=never&signature=testSignature123`;

      try {
        db.get("verify_urls").insert({ user_id: user.id, url }).write();
      } catch (err) {
        throw Error('You must add a "verify_urls" collection to your db');
      }
      res.status(200).jsonp();
    },
  };
};
module.exports = functions;
