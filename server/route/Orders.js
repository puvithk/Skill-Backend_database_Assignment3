const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('menuItems.item');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { orderID, orderDate, userId, menuItems } = req.body;

    const order = new Order({
        orderID,
        orderDate,
        userId,
        menuItems
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
