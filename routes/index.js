// eslint-disable-next-line new-cap
const router = require('express').Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const conn = require('../config/db.config');
router.use('/', require('./user'));
router.use('/', require('./login'));
module.exports = router;
