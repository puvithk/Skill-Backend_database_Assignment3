const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    USN: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    password: String,
    phone: String,
    currentorder: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Order',
        default: []  
    }
});

module.exports = mongoose.model("User", userSchema);
