"use strict";
let arr = [11, 23, 45, 'some', 'else some', true, false, 'else any things', 567, -43];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
let book1 = {
    title: 'book1',
    pageCount: 234,
    genre: 'fantastic'
};
let book2 = {
    title: 'book2',
    pageCount: 123,
    genre: 'discovery'
};
let book3 = {
    title: 'book3',
    pageCount: 453,
    genre: 'romantic'
};
let book4 = {
    title: 'book3',
    pageCount: 453,
    genre: 'romantic',
    authors: [
        {
            name: 'Donald',
            age: 78
        }
    ]
};
let book5 = {
    title: 'book3',
    pageCount: 453,
    genre: 'romantic',
    authors: [
        {
            name: 'Kristi',
            age: 48
        }
    ]
};
let book6 = {
    title: 'book3',
    pageCount: 453,
    genre: 'romantic',
    authors: [
        {
            name: 'Sonic',
            age: 52
        }
    ]
};
let users5 = [
    { name: 'Olga', username: 'olga', password: 'olga234' },
    { name: 'Maks', username: 'maks', password: 'maks455' },
    { name: 'Alex', username: 'alex', password: 'alex567' },
    { name: 'Norman', username: 'norman', password: 'norman675' },
    { name: 'Marina', username: 'marina', password: 'marina543' },
    { name: 'Mary', username: 'mary', password: 'mary334' },
    { name: 'Petro', username: 'petro', password: 'petro634' },
    { name: 'Ivan', username: 'ivan', password: 'ivan632' },
    { name: 'Jan', username: 'jan', password: 'jan143' },
    { name: 'Nelya', username: 'nelya', password: 'nelya417' },
];
let temperature = [
    {
        day: 'Sunday',
        morning: 12,
        afternoon: 21,
        night: 5,
    },
    {
        day: 'Monday',
        morning: 11,
        afternoon: 20,
        night: 7,
    },
    {
        day: 'Tuesday',
        morning: 15,
        afternoon: 26,
        night: 19,
    },
    {
        day: 'Wednesday',
        morning: 18,
        afternoon: 27,
        night: 10,
    },
    {
        day: 'Thursday',
        morning: 16,
        afternoon: 25,
        night: 10,
    },
    {
        day: 'Friday',
        morning: 20,
        afternoon: 27,
        night: 12,
    },
    {
        day: 'Saturday',
        morning: 18,
        afternoon: 27,
        night: 11,
    }
];
// ---------------Логічні розгалуження--------------
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
//
let y1 = -1;
if (y1 !== 0) {
    console.log('Вірно');
}
else {
    console.log('Hе вірно');
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
let time = 34;
if (time >= 0 && time <= 15) {
    console.log('Перша частина години');
}
else if (time >= 16 && time <= 30) {
    console.log('Друга частина години');
}
else if (time >= 31 && time <= 45) {
    console.log('Третя частина години');
}
else if (time >= 46 && time <= 59) {
    console.log('Четверта частина години');
}
else {
    console.log('wrong time');
}
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
}
else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
}
else if (day >= 20 && day <= 31) {
    console.log('Третя декада місяця');
}
else {
    console.log('Декада не існує');
}
// #KzrtqyQ
// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = 4;
if (dayOfWeek !== undefined) {
    switch (dayOfWeek) {
        case 1:
            console.log('Today is class of English');
            break;
        case 2:
            console.log('Today is class of Math');
            break;
        case 3:
            console.log('Today is class of Music');
            break;
        case 4:
            console.log('Today is class of Point');
            break;
        case 5:
            console.log('Today is class of history');
            break;
        case 6:
            console.log('Today went in the park');
            break;
        case 7:
            console.log('Today is weekend');
            break;
        default:
            console.log('Enter wrong the day of week');
    }
}
else {
    console.log('day is undefined');
}
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let num = [3, 11];
if (num[0] > num[1]) {
    console.log(num[0]);
}
else if (num[0] < num[1]) {
    console.log(num[1]);
}
else if (num[0] === num[1]) {
    console.log(num[0], num[1]);
}
else {
    console.log('wrong number');
}
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
let some;
switch (some) {
    case '':
    case 0:
    case null:
    case undefined:
    case false:
        some = 0;
        console.log(some);
        break;
    default:
        console.log(some);
}
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}
