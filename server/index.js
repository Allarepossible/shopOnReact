import express from 'express';

import renderer from '../src/helpers/renderer';

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(PORT, () => {
    console.log('server run!');
})
