import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {serverPort} from '../config.json';
import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();
//db.createProducts();

// Using bodyParser middleware
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.get('/categories', (req, res) => {
    db.listCategories().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.post('/categories', (req, res) => {
    db.createCategory(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});
