const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
.connect(DB)
.then(() => {
  console.log("connection with db successful");
})
.catch((err) => {
  console.log(err.message);
  console.log("connection with db not possible");
});
