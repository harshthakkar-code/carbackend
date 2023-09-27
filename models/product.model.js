var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    stock:{
        type:Number,
        require:true,
    },
    catagory_id:{
        type:Number,
        require:true,
    },
    sub_catagory_id:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    date:{
        type:String,  
        require:true
    },
    })


var productModel = new mongoose.model('productSchema',productSchema)

module.exports=productModel