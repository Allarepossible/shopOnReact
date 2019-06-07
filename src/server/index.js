import 'idempotent-babel-polyfill';
import express from 'express';
import useragent from 'express-useragent';
import {matchRoutes} from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from '../client/Routes';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const app = express();
const PORT = 3000;

app.use(
    '/api',
    proxy('http://redux-react-shop.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        },
    })
);
app.use(useragent.express());
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
        .map(({route}) => (route.loadData ? route.loadData(store, req) : null))
        .map(promise => (promise ? new Promise(resolve => {
            promise.then(resolve).catch(resolve);
        }) : null));

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status('404');
        }

        res.send(content);

        return undefined;
    });
});

app.disable('etag');

app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('server run');
});
