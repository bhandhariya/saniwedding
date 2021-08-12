const mongoose =require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{type:String},
    address:{type:String},
    StartDate:{type:Date},
    Enddate:{type:Date},
    description:{type:String},
    pic:{type:String}
})

const eventModel = mongoose.model('event',eventSchema)

module.exports=eventModel;