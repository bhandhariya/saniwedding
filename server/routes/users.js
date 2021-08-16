var express = require('express');
var router = express.Router();
var photos = require('../modal.js/photos')
var Gallery = require('../modal.js/gallary.model')
var Family = require('../modal.js/family.model')
var Event = require('../modal.js/event.modal')

var Contact = require('../modal.js/contact')

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


router.post('/family', async (req, res,next)=>{
	console.log(req.body);

	try {
		let photo =await Family.create({
			...req.body
		})
		console.log(photo);
		res.send(photo)
	} catch (error) {
		next(error)
	}
})

router.get('/familyfosain', async (req, res,next)=>{
	
	try {
		let photo =await Family.find({
			family:'sani'
		})
		res.send(photo)
	} catch (error) {
		next(error)
	}
})
router.get('/familyfosradha', async (req, res,next)=>{
	
	try {
		let photo =await Family.find({
			family:'radha'
		})
		res.send(photo)
	} catch (error) {
		next(error)
	}
})


router.post('/event',async (req,res,next)=>{
	let data =  req.body;
	let event = await Event.create({...data})
	res.send(event);
})

router.get('/event',async (req,res,next)=>{
	
	let events = await Event.find({})
	res.send(events);
})

router.post('/contact',async (req,res,next)=>{
	let data =  req.body;
	let contact = await Contact.create({...data})
	res.send(contact);
})

router.get('/contact',async (req,res,next)=>{

	let contact = await Contact.find({}).populate('events')
	res.send(contact);
})








module.exports = router;
