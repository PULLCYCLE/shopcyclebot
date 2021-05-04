const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    weight: {
        type: String
    },
    country: {
        type: String
    },
    price: {
        type: Number
    },
    shops: {
        type: [String],
        default: []
    }
})

mongoose.model('products', ProductSchema)