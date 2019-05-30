import 'idempotent-babel-polyfill';
import express from 'express';

import renderer from '../src/helpers/renderer';
import createStore from '../src/helpers/createStore';

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    res.send(renderer(req, store));
});

app.listen(PORT, () => {
    console.log('server run!');
})
