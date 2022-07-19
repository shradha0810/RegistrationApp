const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const tokenmiddleware = require("../db/authenticate");
require("../db/conn");
const USER = require("../db/schema");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

//about page
router.get("/about", tokenmiddleware, (req, res) => {
  res.send(req.userdata);
});

//logout page
router.get("/logout", (req, res) => {
  res.status(201).clearCookie("jwtoken").send("logout");
});

//login page
router.get("/login", (req, res) => {
  res.send("hello login page");
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "All the fields are mandatory" });
  }

  const userExists = await USER.findOne({ email: email });
  if (userExists) {
    const pMatch = await bcrypt.compare(password, userExists.password);
    const token = await userExists.generateTokens();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    if (pMatch) {
      return res.status(201).json({ message: "Login Successful" });
    } else {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
  } else {
    return res.status(422).json({ error: "Invalid Credentials" });
  }
});

//register page
router.get("/register", (req, res) => {
  res.send("hello register page");
});
router.post("/register", (req, res) => {
  // console.log(req.body);
  // res.json({message:req.body});

  const { firstName, lastName, email, password, cPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !cPassword) {
    return res.status(422).json({ error: "All the fields are mandatory" });
  } else if (password != cPassword) {
    return res.status(422).json({ error: "Passwords Donot Match" });
  } else {
    USER.findOne({ email: email })
      .then((userExists) => {
        if (userExists) {
          return res.status(422).json({ error: "User Already Exists" });
        }

        const newUser = new USER({
          firstName,
          lastName,
          email,
          password,
          cPassword,
        });

        newUser
          .save()
          .then(() => {
            return res.status(201).json({ message: "User Added" });
          })
          .catch(() => {
            return res.status(422).json({ error: "User Couldnot be added" });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
