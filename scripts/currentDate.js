const currentDate = new Date();

const currentYear = currentDate.getFullYear();
 console.log(currentYear);
document.getElementById("currentYear").innerHTML = currentYear;

var string = document.lastModified;
var lastUp = new Date(document.lastModified);

document.getElementById("lastUpdated").innerHTML = lastUp;
console.log(lastUp)