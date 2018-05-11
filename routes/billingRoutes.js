const keys = require("../config/keys");
const stripe = require("stripe")("");
const passport = require("passort");

module.exports = app => {
  app.post("/api/stripe", (req, res) => {});
};
