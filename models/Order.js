const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    customer: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true }
    },
    items: [{
        _id: false,
        bookId: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, default: '' },
        price: { type: Number, required: true, min: 0 },
        quantity: { type: Number, required: true, min: 1, max: 99 }
    }],
    total: { type: Number, required: true, min: 0 },
    paymentMethod: { type: String, enum: ['Cash on Delivery'], required: true },
    status: { type: String, enum: ['Placed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Placed' }
}, { timestamps: true })

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema)