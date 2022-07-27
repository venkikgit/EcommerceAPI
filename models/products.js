const mongoose = require('mongoose');
// Product Schema
const productSchema = new mongoose.Schema({

    name: {type:String, required:true},
    quantity:{type:String, required:true}
},{
    timestamps:true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;