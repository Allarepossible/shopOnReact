import mongoose from 'mongoose';

import config from '../../config.json';

import '../models/Product';
import '../models/Category';

const Product = mongoose.model('Product');
const Category = mongoose.model('Category');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {useNewUrlParser: true});
}

export function createProducts() {
    const note = new Product({
        name: 'Samsung GT-I9301I  GALAXY S 3',
        id: 1,
        catalog: 'mobiles',
        images: [
            {image: 'images/img/mobiles/Samsung-GT-I9301I-s1.jpg'},
            {image: 'images/img/mobiles/Samsung-GT-I9301I-s2.jpg'},
            {image: 'images/img/mobiles/Samsung-GT-I9301I-s3.jpg'},
        ],
        date: '12432575',
        articul: '2000',
        oc: 'Android',
        brands: 'Samsung',
        color: 'white',
        feature: [
            {name: 'Тип SIM-карты', value: 'Micro-SIM'},
            {name: 'Количество SIM-карт', value: '1'},
            {name: 'Цвет', value: 'Белый'},
            {name: 'ОС', value: 'Android'},
            {name: 'Связь 3G', value: 'Есть'},
            {name: '4G(LTE)', value: 'Нет'},
            {name: 'GPS-модуль', value: 'Есть'},
        ],
        ratio: 3,
        nalichie: 'В наличии',
        info: 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G' +
        ' ' +
        'Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
        price: 1290,
        createdAt: new Date(),
    });

    return note.save();
}

export function listNotes(id) {
    return Product.find();
}

export function listCategories(id) {
    return Category.find();
}

export function createNote(data) {
    const note = new Product({
        name: data.name,
        text: data.text,
        color: data.color,
        createdAt: new Date(),
    });

    return note.save();
}

export function createCategory(data) {
    const note = new Category({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date(),
    });

    return note.save();
}

export function deleteNote(id) {
    return Product.findById(id).remove();
}
