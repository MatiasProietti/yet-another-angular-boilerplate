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
        return res.status(409).jsonp({ code: 409, message: "Username and/or email already in use" });
      }

      try {
        user = db.get("users").insert({ email, username, password, verified: false }).write();
        db.get("verify_urls")
          .insert({
            user_id: user.id,
            url: `/auth/confirm-email?id=${user.id}&hash=testHash123&expires=never&signature=testSignature123`,
          })
          .write();
      } catch (err) {
        throw Error('You must add a "users" and "verify_urls" collection to your db');
      }

      return res.status(201).jsonp();
    },

    login(req, res) {
      const { username, password } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ username, password }).value();

      if (!user) {
        return res.status(404).jsonp({ code: 404, message: "Wrong username and/or password" });
      }

      if (!user.verified) {
        return res.status(403).jsonp({ code: 403, message: "User is not verified" });
      }

      token = jwt.sign({ username: user.username, email: user.email }, CONFIG.JWT_SECRET_KEY, {
        expiresIn: CONFIG.JWT_EXPIRES_IN,
        subject: String(user.id),
      });
      if (token) return res.status(200).jsonp({ token });
      else return res.status(500).jsonp({ code: 500, message: "Something went wrong" });
    },

    forgotPassword(req, res) {
      const { email } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ email }).value();

      if (!user) {
        return res.status(404).jsonp({ code: 404, message: "Wrong email" });
      }

      if (!user.verified) {
        return res.status(403).jsonp({ code: 403, message: "User is not verified" });
      }

      const token = "testToken1234";

      const url = `http://localhost:4200/reset-password?token=${token}`;

      try {
        db.get("reset_tokens").insert({ user_id: user.id, token }).write();
      } catch (err) {
        throw Error('You must add a "reset_tokens" collection to your db');
      }
      return res.status(200).jsonp();
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
        return res.status(404).jsonp({ code: 404, message: "Token not found" });
      }

      if (!user.verified) {
        return res.status(403).jsonp({ code: 403, message: "User is not verified" });
      }

      try {
        db.get("reset_tokens").remove({ token }).write();
        db.get("users").find({ id: reset_token.user_id }).assign({ password }).write();
      } catch (err) {
        throw Error('You must add a "forgotPassword" collection to your db');
      }
      return res.status(200).jsonp();
    },

    changePassword(req, res) {
      const { old_password, new_password } = req.body;
      const jwtHeader = req.headers["authorization"]?.replace("Bearer ", "");
      if (!jwtHeader) return res.status(401).jsonp({ code: 401, message: "Invalid JWT" });
      try {
        var claims = jwt.verify(jwtHeader, CONFIG.JWT_SECRET_KEY);
      } catch (err) {
        return res.status(401).jsonp({ code: 401, message: "Invalid JWT" });
      }

      if (!claims) return res.status(401).jsonp({ code: 401, message: "Invalid JWT" });

      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ id: Number(claims.sub), password: old_password });

      if (!user.value()) {
        return res.status(404).jsonp({ code: 404, message: "Token not found" });
      }

      try {
        user.assign({ password: new_password }).write();
      } catch (err) {
        throw Error('You must add a "users" collection to your db');
      }
      return res.status(200).jsonp();
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
        return res.status(404).jsonp({ code: 404, message: "Token not found" });
      }

      try {
        db.get("verify_urls").remove({ url: req.url }).write();
        const user = db.get("users").find({ id: verify_url.user_id });
        user.assign({ verified: true }).write();
      } catch (err) {
        throw Error('You must add a "users" collection to your db');
      }
      return res.status(200).jsonp();
    },

    resendEmail(req, res) {
      const { email } = req.body;
      const { db } = req.app;
      if (db == null) {
        throw Error("You must bind the router db to the app");
      }

      const user = db.get("users").find({ email }).value();

      if (!user) {
        return res.status(404).jsonp({ code: 404, message: "Email not found" });
      }

      if (user.verified) {
        return res.status(403).jsonp({ code: 403, message: "User is already verified" });
      }

      const url = `/auth/confirm-email?id=${user.id}&hash=testHash123&expires=never&signature=testSignature123`;

      try {
        db.get("verify_urls").insert({ user_id: user.id, url }).write();
      } catch (err) {
        throw Error('You must add a "verify_urls" collection to your db');
      }
      return res.status(200).jsonp();
    },
  };
};
module.exports = functions;
