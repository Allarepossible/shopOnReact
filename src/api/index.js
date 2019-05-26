import data from './mockData';

export const fetchProducts = id => new Promise(resolve => {
    resolve(data.find(catalog => catalog.id === id));
});

export const fetchCatalogs = id => new Promise(resolve => {
    resolve(data.find(catalog => catalog.id === id));
});

