"use strict";

const db = require("../config/db");

class User {
  id;
  passwd;

  constructor(id, passwd) {
    this.id = id;
    this.passwd = passwd;
  }

  login = (res) => {
    const response = {};

    db.query(
      `SELECT * FROM users WHERE user_id LIKE ?`,
      [this.id],
      (err, datas) => {
        const db = datas[0];
        if (err) throw err;

        if (db && this.id === db.user_id && this.passwd === db.user_passwd) {
          response.isSuccess = true;
          return res.json(response);
        }
        return res.json(response);
      }
    );
  };
}

module.exports = User;
