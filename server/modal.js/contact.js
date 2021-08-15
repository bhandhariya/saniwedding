const mongoose =require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    guestNo:{type:Number},
    events:{type:mongoose.Schema.Types.ObjectId,ref:'event'},
    message:{type:String},
})

const contactModel = mongoose.model('contact',contactSchema)

module.exports=contactModel;