const mongoose = require("mongoose")

const Menu = new mongoose.Schema({
    name  :{
        type : String,
        required : true,
        unique  :true
    },
    price :{
        type : Number,
        required : true
    },
    foodType :{
        type : String,
        enum: ['veg', 'non veg'],
        required: true

    },
    description :{
        type : String,
    },
    isAvaliableTodate:{
        type:Boolean,
        default:true

    },
    image :{
        type:String,
    }
})
module.exports = mongoose.model("MenuItems",Menu)