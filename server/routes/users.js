var express = require('express');
var router = express.Router();
var photos = require('../modal.js/photos')

/* GET users listing. */
router.get('/', async function(req, res, next) {
	let result = await photos.find();
	res.send(result)
});







module.exports = router;
