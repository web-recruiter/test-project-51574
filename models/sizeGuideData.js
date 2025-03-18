
var mongoose = require('mongoose');

var SizeGuideTableSchema = new mongoose.Schema({
    shopname: {
        type: String,
        required: true
    },
    dataArrayStr: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    }
});

mongoose.model('SizeGuideData', SizeGuideTableSchema);