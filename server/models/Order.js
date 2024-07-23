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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItems'
    }]
})
module.exports = mongoose.model('Order', Order)