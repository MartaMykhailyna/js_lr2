function getWeekDay(date) {
    const daysOfWeek = [ 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}
document.write('Завдання №2')
let date = new Date(2012, 0, 4);
alert(getWeekDay(date)); 
