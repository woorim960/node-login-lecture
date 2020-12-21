"use strict";

const User = require("../../classes/User");

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const body = req.body;
    const user = new User(body.id, body.passwd);
    user.login(res);
  },
};

module.exports = {
  output,
  process,
};
