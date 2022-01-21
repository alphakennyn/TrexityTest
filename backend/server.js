const express = require("express");
const routes = require("./routes");
const app = express();

const port = 3001;

// To keep this project as light possible, I wont actually be downloading these middlewares.
const middlewares = [
  // helmet(), // help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
  // session({ // express session
  //     name: "session",
  //     secret: 's3Cur3'
  // }),
  // cors(), protect against cross-site request
];

// app.use(middlewares);

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
