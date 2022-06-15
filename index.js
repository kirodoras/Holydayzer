import express from 'express';
import cors from 'cors';
import { Holidays } from './Holidays.js';
import { IsToday } from './IsToday.js';

const app = express();
app.use(cors());

app.get('/holidays', (request, response) => {
    response.send(Holidays());
});

app.get('/is-today-holiday', (request, response) => {
    response.send(IsToday());
});

app.listen(5000);