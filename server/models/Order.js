const mongoose = require("mongoose")

const Order = mongoose.Schema({
    orderID: {
        type: String,
        required: true,
        unique : true
    },
    orderDate: {
        type: Date,
        required: true
        },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    menuItems: [{
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'MenuItems',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }],
    orderStatus :{
        type: String,
        required: true,
        enum: [' Pending', ' Completed',' canceled'],
    }

})
module.exports = mongoose.model('Order', Order)