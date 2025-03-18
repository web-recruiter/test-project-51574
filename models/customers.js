
var mongoose = require('mongoose');
require('mongoose-type-email');

var customerSchema = new mongoose.Schema({
    shopname: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    uniqueStr: {
        type: String,
        unique: true,
        required: true
    }
});

mongoose.model('customer', customerSchema);