// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['in progress', 'completed'], default: 'in progress' },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
