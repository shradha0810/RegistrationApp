const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/config.env" });
require("./db/conn");
const USER=require("./db/schema");
app.use(express.json());
app.use(require("./router/auth"));


if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"));
}



app.listen(process.env.PORT || 4000, () => {
  console.log("Listening...");
});
