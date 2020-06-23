//chapter 26-30


// Task- 01
var int = prompt("Enetr a positive Integer: ");
document.write("Number: " + int + "<br>");

var round = Math.round(int)
document.write("round off value: " + round + "<br>");

var floor = Math.floor(int);
document.write("Floor Value: " + floor + "<br>");

var ceil = Math.ceil(int);
document.write("Ceil Value: " + ceil + "<br>")
document.write("<br>")


// Task- 02
var negativeFloat = prompt("Enetr a Negative Integer: ");
document.write("Number: " + negativeFloat + "<br>");

var round = Math.round(negativeFloat);
document.write("round off value: " + round + "<br>");

var floor = Math.floor(negativeFloat);
document.write("Floor Value: " + floor + "<br>");

var ceil = Math.ceil(negativeFloat);
document.write("Ceil Value: " + ceil + "<br>")
document.write("<br>")


//Task- 03

var num = prompt("Enter any Number: ");

var absoluteValue = Math.abs(num);

document.write("The absolute value of" + " " + num + "is" +absoluteValue )
document.write("<br>")


// Task- 04
var dice = Math.random() * 6;
var ceil = Math.ceil(dice);
document.write("Random Dice Value: " + ceil + "<br>");
document.write("<br>")


//Task-05

var toss = Math.random() * 2;
var tossceil = Math.floor(toss);

if (tossceil === 0) {
    alert("Value " + tossceil + " has won the toss 'HEADS' ");
}
if (tossceil === 1) {
    alert("Value " + tossceil + " has won the toss 'TAILS' ");
}
document.write("<br>")


//Task-06

var numbers = Math.random() * 100;
document.write("Random number between 1 to 100: " + Math.ceil(numbers) );
document.write("<br>")


//Task-07

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("kg")

document.write("the weight of user is " + weight[0] + " Kilograms")
document.write("<br>")


//Task- 08

var secretNumber = 9;
var userInput = +prompt("Guess Number (ranging between 1 to 10 ) ");

if (userInput === secretNumber) {
    alert("Correct Answer.!");
}
else {
    alert("Wrong.! Try Again...");
}
document.write("<br>")

//chapter 31-34

// Task: 01
var date = new Date();
document.write(date + "<br>");
document.write("<br>")

//Task-02

var monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date();
var currentMonth = date.getMonth();
alert("Current Month: " + monthsNames[currentMonth]);
document.write("<br>")


// Task- 03
var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var day = date.getDay();
var nameOfDay = days[day]
document.write("Today is: " + nameOfDay + "<br>")
document.write("<br>")


//Task-04

var dayNames = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thrday', 'Friday', 'Saturday'];
var date = new Date();
var today = date.getDay();
if (dayNames[today] == 'Sunday' , dayNames[today]== "saturday") {
    alert("It's Fun Day");
}
else{
    alert("Its working day")
}
document.write("<br>")

//Task- 05

var date = new Date();
var day = date.getDate();
if (day < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month" );

}
document.write("<br>")

//Task-06

var todayDate = new Date();
document.write("Current Date: " + todayDate);
var miliseconds = todayDate.getTime();
document.write("<br>Elasped miliseconds since January 1, 1970: " + miliseconds);
var minutes = miliseconds / (60 * 60);
document.write("<br>Elasped minutes since January 1, 1970: " + minutes);
document.write("<br>")

//Task-07

var todayDate = new Date();
var time = todayDate.getHours();
if (time >= 0 && time < 12) {
    alert("It's AM");

} else if (time >= 12 && time < 24) {
    alert("It's PM");
}
document.write("<br>")

//Task-08

var date = new Date(2020, 11, 31);
var laterDate = date
document.write("Later date: " + date);
document.write("<br>")


//chapter 35-38

//Task-01
function date() {
    var date = new Date();
    return date;
}
document.write(date());

//Task-02

function GreetUser(Fname, Lname) {
    var name = Fname + " " + Lname;
    return name;
}
alert(GreetUser("Mohib","Ismail"))


