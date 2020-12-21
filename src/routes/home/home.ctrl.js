"use strict";

const users = {
  jaesoung: "1234",
  soongu: "1234",
  minjae: "2345",
  woorim: "3456",
};

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
    const response = {};
    const user = req.body;

    if (users.hasOwnProperty(user.id) && users[user.id] === user.passwd) {
      response.isSuccess = true;
      return res.json(response);
    }
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
