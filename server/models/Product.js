import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String},
    id: {type: Number},
    catalog: {type: String},
    images: [
        {image: {type: String}},
        {image: {type: String}},
        {image: {type: String}},
    ],
    date: {type: String},
    articul: {type: String},
    oc: {type: String},
    brands: {type: String},
    color: {type: String},
    feature: [
        {name: {type: String}, value: {type: String}},
    ],
    ratio: {type: Number},
    nalichie: {type: String},
    info: {type: String},
    price: {type: Number},
});

mongoose.model('Product', ProductSchema);
