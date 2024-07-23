const express = require("express");
const Menus = require('./route/Menus'); 
const Users = require('./route/Users');
const Orders = require('./route/Orders'); 
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const mongoURL = process.env.MONGO_URI;

app.use(cors());
// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log(err.message));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api/menus', Menus); 
app.use('/api/users', Users); 
app.use('/api/orders', Orders);

// Start server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
