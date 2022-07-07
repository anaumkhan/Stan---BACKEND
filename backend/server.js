const app = require("./app");

const port = process.env.PORT || 3001;

/* This server.js file starts the app by listening on port 3001 */
app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port);
});
