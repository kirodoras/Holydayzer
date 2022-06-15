import express from 'express';
import cors from 'cors';
import { Holidays } from './Holidays.js';
import { IsToday } from './IsToday.js';

const port = process.env.PORT || 5000;

function SearchMonthHoliday(month){
    const holidays = Holidays();
    const array = [];
    for(let i = 0; i < holidays.length; i++){
        let iMonth = holidays[i].date.split("/");
        if(month === Number(iMonth[0])){
            array.push(holidays[i]);
        }
    }

    return (
        array
    );
}

const app = express();
app.use(cors());

app.get('/holidays', (request, response) => {
    response.send(Holidays());
});

app.get('/is-today-holiday', (request, response) => {
    response.send(IsToday());
});

app.get('/holidays/:idMes', (request, response) => {
    const id = Number(request.params.idMes);
    const res = SearchMonthHoliday(id);
    response.send(res);
});

app.listen(port);