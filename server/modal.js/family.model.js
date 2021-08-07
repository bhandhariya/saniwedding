const mongoose =require('mongoose');

const familySchema = new mongoose.Schema({
    url:{type:String},
    family:{type:String},
    name:{type:String}
})

const familyModel = mongoose.model('family',familySchema)

module.exports=familyModel;