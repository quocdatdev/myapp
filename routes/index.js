const router = require('express').Router();
const conn = require('../database/db');

router.get('/getAll', (req, res) => {
	conn.query('SELECT * FROM clone_instagram.users', (err, rows) => {
		if(err) {
			res.status(500).send({
				error: 'Failed'
			});
		}
		res.json(rows);
	});
});

module.exports = router;