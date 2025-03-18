
var mongoose = require('mongoose');

var ModelInfoSchema = new mongoose.Schema({
    modelFName: {
        type: String,
        required: true
    },
    modelLName: {
        type: String,
        required: true
    },
    instagramAlias: {
        type: String,
        required: true
    },
    heightFt: Number,
    heightIn: Number,
    bust: Number,
    waist: Number,
    hips: Number,
    topSize: String,
    bottomSize: Number,
    modelPhoto: {
        type: String,
        required: true
    }
});

mongoose.model('ModelData', ModelInfoSchema);