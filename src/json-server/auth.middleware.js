var Constants = require("./auth/constants");
var Functions = require("./auth/functions");
var JWT = require("./../../node_modules/jsonwebtoken");
module.exports = (req, res, next) => {
  const functions = Functions(JWT, Constants("").CONFIG);
  const constants = Constants(functions);
  // We intercept only if it's an auth url
  if (req.url.startsWith("/auth/")) {
    const routeName = req.url.split("?")[0].split("/")[2];
    const route = constants.ROUTES[routeName];
    if (!route.methods.includes(req.method)) {
      res.status(405).jsonp("Method Not Allowed");
    } else {
      route.exec(req, res);
    }
  } else next();
};
