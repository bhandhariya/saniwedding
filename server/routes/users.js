var express = require('express');
var router = express.Router();
var photos = require('../modal/photos')

/* GET users listing. */
router.get('/', async function(req, res, next) {
	let result = await photos.find();
	res.send(result)
});
router.get('/test', function(req, res, next) {
let a=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
  res.send(a);
});


router.post('/upload',async (req,res,next)=>{
	let data = req.body;
	console.log(data.url)
	let photo = await photos.create({
		url:data.url
	}) 

	res.send(photo)

})

router.get('getphotos',async (req,res,next)=>{
	let result = await photos.find();
	res.send(result)
})

router.post('uplodephotos',async (req,res,next)=>{
	let result = await photos.find();
	res.send(result)
})





module.exports = router;
