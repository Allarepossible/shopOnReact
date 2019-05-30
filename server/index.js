import 'idempotent-babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';

import Routes from '../src/client/Routes';
import renderer from '../src/helpers/renderer';
import createStore from '../src/helpers/createStore';

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();


    matchRoutes(Routes, req.path).map(({route}) => route.loadData ? route.loadData() : null);

    res.send(renderer(req, store));
});

app.listen(PORT, () => {
    console.log('server run!');
})
