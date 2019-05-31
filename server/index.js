import 'idempotent-babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from '../src/client/Routes';
import renderer from '../src/helpers/renderer';
import createStore from '../src/helpers/createStore';

const app = express();
const PORT = 3000;

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        },
    })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);


    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.notFound) {
            res.status('404');
        }

        res.send(content);
    });
});

app.listen(PORT, () => {
    console.log('server run!');
})
