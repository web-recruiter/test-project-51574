
var mongoose = require('mongoose');

var CollectionFilterProductSchema = new mongoose.Schema({
    shopname: {
        type: String,
        required: true
    },
    product_id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    body_html: String,
    vendor: String,
    product_type: String,
    created_at: Date,
    handle: String,
    updated_at: Date,
    published_at: Date,
    template_suffix: String,
    published_scope: String,
    tags: String,
    variants: { type: mongoose.Schema.Types.Mixed },
    options: { type: mongoose.Schema.Types.Mixed },
    images: { type: mongoose.Schema.Types.Mixed },
    image: { type: mongoose.Schema.Types.Mixed },
    metafields_global_title_tag: String,
    metafields_global_description_tag: String,
    size: [String],
    color: [String]
});

mongoose.model('CollectionFilterProduct', CollectionFilterProductSchema);