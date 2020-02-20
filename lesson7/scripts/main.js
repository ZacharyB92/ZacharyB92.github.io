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
// ------------------------------- Weather Summary Stuff---------------------------
let f, t, s;
t = 50;
s = 10;

if(t <= 50 && s >= 3) {
f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.querySelector('#wind-chill').innerHTML = f.toFixed(0) + '&deg;'; 
} else{
    f ='N/A';
    document.querySelector('#wind-chill').innerHTML = f;
}

document.querySelector('#current-temp').innerHTML = `${t}&deg;`; 
document.querySelector('#wind-speed').innerHTML = s + 'mph';


// --------------------------------------------------------------------------
// ------------------------------------------Pancake Stuff------------------
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.classList.remove('hidden');
}
// --------------------------------------------------------------------------
// --------------------------Font Loader-------------------------------------
WebFont.load({
    google: {
      families: [
        'Raleway',
        'Rajdhani'
      ]
    }
  });