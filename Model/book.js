const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    qty:{
        type:Number,
        required:true,
        min:1
    }
},{timestamps:true});

module.exports = mongoose.model("Books",schema);