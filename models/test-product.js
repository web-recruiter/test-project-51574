
var mongoose = require('mongoose');

var TestProductSchema = new mongoose.Schema({
    shopname: {
        type: String,
        required: true
    },
    product_id: {
        type: Number,
        required: true,
        unique: true
    },
    product: {}
});

mongoose.model('TestProduct', TestProductSchema);