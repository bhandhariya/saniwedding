const mongoose =require('mongoose');

const photoSchema = new mongoose.Schema({
    url:{type:String}
})

const photoModel = mongoose.model('photos',photoSchema)

module.exports=photoModel;