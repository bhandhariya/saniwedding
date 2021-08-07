const mongoose =require('mongoose');

const gallarySchema = new mongoose.Schema({
    url:{type:String}
})

const gallaryModel = mongoose.model('gallary',gallarySchema)

module.exports=gallaryModel;