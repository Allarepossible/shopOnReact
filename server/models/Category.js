import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {type: String},
    id: {type: String},
    img: {type: String},
    filters: [
        {name: {type: String}, value: {type: String}},
    ],
});

mongoose.model('Category', CategorySchema);
