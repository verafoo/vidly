require("express-async-errors");
const express = require("express");
const app = express();

module.exports = app.listen(4000);
console.log("I am listening to 4000");

require('./startup/routes')(app);
require('./startup/db')(app);
require('./startup/prod')(app);

