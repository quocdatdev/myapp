// eslint-disable-next-line new-cap
const router = require('express').Router();
const conn = require('../config/db.config');

router.get('/getAll', (req, res) => {
  conn.query('select * from clone_instagram.users', (err, rows) => {
    if (err) {
      res.status(500).send({err: 'Failed'});
    }
    res.json(rows);
  });
});

module.exports = router;
