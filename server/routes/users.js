var express = require('express');
var router = express.Router();
var photos = require('../modal.js/photos')
var Gallery = require('../modal.js/gallary.model')

/* GET users listing. */
router.get('/', async function(req, res, next) {
	let result = await photos.find();
	res.send(result)
});

router.post('/gallary', async (req, res,next)=>{
	let url = req.body.url;
	try {
		let photo =await Gallery.create({
			url:url
		})
		console.log(photo);
		res.send(photo)
	} catch (error) {
		next(error)
	}
})

router.get('/gallary', async (req, res,next)=>{
	
	try {
		let photo =await Gallery.find()
		res.send(photo)
	} catch (error) {
		next(error)
	}
})






module.exports = router;
