import {pick, map, find, propEq} from 'ramda';

import data from './mockData';

export const fetchProducts = id => new Promise(resolve => {
    resolve(find(propEq('id', id))(data));
});

export const fetchCatalogs = () => new Promise(resolve => {
    resolve(map(pick(['id', 'name', 'img']), data));
});

