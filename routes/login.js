/* eslint-disable no-mixed-spaces-and-tabs */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const conn = require('../config/db.config');
const bcrypt = require('bcrypt');

router.post('/login', (req, res, next) => {
  const sql = `SELECT * FROM clone_instagram.users WHERE username = 
  ${conn.escape(req.body.username)}`;

  conn.query(sql, (err, result) => {
    if (err) {
      return res.status(400).send({msg: err});
    }
    if (!result.length) {
      return res.status(401).send({
        msg: 'Username or password incorrect',
      });
    }
    // eslint-disable-next-line max-len
    bcrypt.compare(req.body.password, result[0]['password'], (bErr, bResult) => {
      if (bErr) {
        return res.status(401).send({
          msg: 'Username or password incorrect',
        });
      }
    });
  });
});

module.exports = router;
