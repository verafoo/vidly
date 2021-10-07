const express = require("express");
const router = express.Router();
const Register = require("../models/register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  const user = await Register.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");
  const password = config.get("jwtPrivateKey")
  console.log('password', password)
  var token = jwt.sign({ _id: user._id }, password);
  res.status(200).send(token);
});

module.exports = router;
