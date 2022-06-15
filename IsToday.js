import { Holidays } from "./Holidays.js";

export function IsToday(){
    const holidays = Holidays();
    const today = new Date();
    const formatedToday = today.toLocaleDateString('en-US');
    const day = holidays.filter(day => day.date === formatedToday);
    let response = ``;

    if(day.length > 0){
        response = `Sim, hoje é ${day[0].name}`;
    } else {
        response = `Não, hoje não é feriado`;
    }
    
    return (
        response
    );
}