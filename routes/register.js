const express = require("express");
const router = express.Router();
const Register = require("../models/register");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  const exist = await Register.findOne({ email: req.body.email });
  if (exist) return res.status(400).send("User has already been register.");
  const user = new Register(_.pick(req.body, ["email", "password", "name"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  console.log(user, "user");
  // const key = config.get("jwtPrivateKey");
  const token = await user.generateToken();
  try {
    await user.save();
    res.status(200).header('x-auth-token',token).send(_.pick(user, ["name", "_id", "email"]));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
