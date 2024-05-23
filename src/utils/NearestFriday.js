function addDays(date, day) {
    let new_date = new Date(date.getTime());
    new_date.setDate(new_date.getDate() + day);
    return new_date;
}

export function getDates(k, day) {
    const day_num = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday' ,'thursday' ,'friday'].indexOf(day.toLowerCase())

    let new_day = new Date();
    while (new_day.getDay() !== day_num) {
        new_day = addDays(new_day, 1)
    }
    
    return Array(k).fill().map((_, index) => addDays(new_day, index * 7).toLocaleDateString() )
}