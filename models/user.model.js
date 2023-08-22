var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        uppercase:true
    },
    email:{
        type:String,
        require:true,
        lowercase:true
    },
    mobile: {      
    type:Number,
    default:1234567890
}
})

var UserModel = new mongoose.model('UserModel',userSchema)

module.exports=UserModel