/*------Wednesday, 20 May 2020----------*/
/*Declare date varialbe */
let currentDate = new Date();
let fullDate;

 /*day of week*/
let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayOfWeek = currentDate.getDay();
fullDate = daysOfWeek[dayOfWeek];

/*day of month*/

let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;

/*month*/


let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Junly',
    'August',
    'September',
    'October',
    'November',
    'December'
];

fullDate += ' ' + months[currentDate.getMonth()];

/*year*/
let year = currentDate.getFullYear();
fullDate += ' ' + year;

/*full date*/ 

document.querySelector('#current-date').textContent = fullDate;

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

const hamButton =
document.querySelector(".ham");
hamButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {

    document.querySelector(".navigation").classList.toggle("responsive");
}

// -------------------------------------------------------------------------
// ------------------------------- Hero img Stuff---------------------------
document.querySelector('#current-temp').innerHTML = '50&deg;';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';

// --------------------------------------------------------------------------
// ------------------------------------------Pancake Stuff------------------
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.classList.remove('hidden');
 
}
