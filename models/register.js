const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: 8,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
});

registerSchema.methods.generateToken = function() {
  const key = config.get("jwtPrivateKey");
  const token = jwt.sign({ _id: this._id }, key);
  return token;
};
const Register = new mongoose.model("Register", registerSchema);

module.exports = Register;
