
var mongoose = require('mongoose');

var CollectionFilterAuthSchema = new mongoose.Schema({
    shopname: {
        type: String,
        unique: true,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

mongoose.model('CollectionFilterAuth', CollectionFilterAuthSchema);