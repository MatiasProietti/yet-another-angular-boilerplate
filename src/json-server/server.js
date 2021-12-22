const jsonServer = require("json-server");
const authMiddleware = require("./auth.middleware");
const delayMiddleware = require("./delay.middleware");
const server = jsonServer.create();
// This path needs to be relative to the folder where we call "node server.js"
const router = jsonServer.router("./src/json-server/db.json");
const middlewares = [jsonServer.defaults()];

server.db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(delayMiddleware);
server.use(authMiddleware);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

router.render = (req, res) => {
  res.jsonp(res.locals.data);
};
