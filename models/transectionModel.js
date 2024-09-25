const mongoose = require("mongoose");
const transectionSchema = new mongoose.Schema({
    userid:{
        type: String,
        requires: true
    },
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    type: {
        type: String,
        requires: [true, 'type is required']
    },
    category: {
        type: String,
        requires: [true, 'cat is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        requires: [true, 'desc is required']
    },
    date: {
        type: Date,
        requires: [true, 'date is required']
    }
}, { timestamps: true });
const transectionModel = mongoose.model('transections', transectionSchema);

module.exports = transectionModel;