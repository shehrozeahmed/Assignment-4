// Chapter # 1

// Task # 1
alert("Welcome to our website!");

// Task # 2
alert("Error! Please enter a valid password.");

// Task # 3
alert("Welcome to JS Land...\nHappy Coding!");

// Task # 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task # 5
alert("Hello... I can run JS through my web browser's console");

// Task # 6 and 7
function btnAlert() {
    alert("You clicked the button!");
}


// Chapter # 2

// Task # 1
var username;

// Task # 2
var myName = "Abdul Basit Mehtab";

// Task # 3
var message = "Hello World!";
alert(message);

// Task # 4
var studentName = "Jhone Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Task # 5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Task # 6
var email = "shehrozeahmed84@gmail.com";
alert("My email address is " + email);

// Task # 7
var book = "A smarter \nway to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Task # 8
document.write("<br>");
document.write("Yah! I can write HTML content through JavaScript");

// Task # 9
var specialString = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(specialString);
document.write("<br>");
document.write("<br>" + specialString);



// Chapter # 3

// Task # 1
var age = 28;
alert("I am " + age + " years old");

// Task # 2
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
alert("You have visited this site " + n + " times");

// Task # 3
var birthYear = "1991";
document.write("<br>");
document.write("<br>");
document.write("My birth year is" + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

// Task # 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<br>");
document.write("<br>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");


// Chapter # 4

// Task # 1
var variable1 = "JavaScript",
    variable2 = "is",
    variable3 = "Cool!";

// Task # 2
// Legal variable names:
var variable;
var $variable;
var _variable;
var my_variable;
var $my_variable;

// Illegal variable names:
// var 1stnum;
// var 2ndnum;
// var 3rdnum;
// var 4thnum;
// var 5thnum; 


// Task # 3
var value1 = "abcd",
    value2 = "1234",
    value3 = "_",
    value4 = "$";
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain " + value1 + ", " + value2 + ", " + value3 + ", and " + value4 + ". For example $my_1stVariable");
document.write("<br>");
var value5 = "letter",
value6= " $",
value7 = "_";
document.write("Variables must begin with a " + value5 + ", " + value6 + ", or " + value7 + ". For example $name, _name or name");
document.write("<br>");
var value8 = "case sensitive";
document.write("Variable names are " + value8);
document.write("<br>");
var value9 = "keywords";
document.write("Variable names should not be JS " + value9);

//chapter #5
//Task #1
var firstnumber = prompt("Enter first number:");
var secondnumber = prompt("Enter second number:");
var sum = (+firstnumber) + (+secondnumber);
document.write("<br>");
document.write("<br>");
document.write("Sum of " + firstnumber + " and " + secondnumber + " is " + sum);

// Task#2
var firstnumber = prompt("Enter first number:");
var secondnumber = prompt("Enter second number:");
var subtraction= (+firstnumber) - (+secondnumber);
document.write("<br>");
document.write("<br>");
document.write("subtraction of " + firstnumber + " and " + secondnumber + " is " + subtraction);



var firstnumber = prompt("Enter first number:");
var secondnumber = prompt("Enter second number:");
var multiply = (+firstnumber) * (+secondnumber);
document.write("<br>");
document.write("<br>");
document.write("multiply of " + firstnumber + " and " + secondnumber + " is " + multiply);



var firstnumber = prompt("Enter first number:");
var secondnumber = prompt("Enter second number:");
var division = (+firstnumber) / (+secondnumber);
document.write("<br>");
document.write("<br>");
document.write("division of " + firstnumber + " and " + secondnumber + " is " + division);


var firstnumber = prompt("Enter first number:");
var secondnumber = prompt("Enter second number:");
var modulus= (+firstnumber) % (+secondnumber);
document.write("<br>");
document.write("<br>");
document.write("modulus of " + firstnumber + " and " + secondnumber + " is " + modulus);


//Task#3
var number;
document.write("Value after variable declaration is: " + number);
document.write("<br>");
number = 5 ;
document.write("Initial value: " + number);
document.write("<br>");
number++;
document.write("Value after increment is: " +number);
document.write("<br>");
number = number + 7;
document.write("Value after addition is: " + number);
document.write("<br>");
number--;
document.write("Value after decrement is: " +number);
document.write("<br>");
number = number % 3;
document.write("The remainder is: " + number);


// Task # 4
document.write("<br>");
document.write("<br>");
var ticketPrice = 600;
var ticketQuantity = 5;
var totalPrice = ticketQuantity * ticketPrice;
document.write("Total cost to buy " + ticketQuantity + " tickets to a movie is " + totalPrice + "PKR");


// Task # 6
document.write("<br><br>");
var Cel = 25;
var Fah = (Cel * 9 / 5) + 32;
document.write(Cel + "°C" + " is " + Fah + "°F");
var Fahr = 70;
var Cels = (Fahr - 32) * 5 / 9;
document.write("<br>");
document.write(Fahr + "°F" + " is " + Cels + "°C");


// Task # 7
document.write("<br><br>");
document.write("<h1>Shopping Cart</h1>");
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 *  quantityItem2) + shippingCharges;
document.write("Price of item 1 is " +  priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges);
document.write("<br><br>");
document.write("Total cost of your order is " + totalCost);


// Task # 8
document.write("<br><br>");
document.write("<h1>Marks Sheet</h1>");
var marks_obtained = 804;
var total_marks = 980;
var percentage = (marks_obtained / total_marks) * 100;
document.write("Total marks: " + total_marks + "<br>");
document.write("Marks obtained: " + marks_obtained + "<br>");
document.write("Percentage: " + percentage + "%");



// Task # 9
document.write("<br><br>");
document.write("<h1>Currency in PKR</h1>");
var usDollar = 104.80;
var saudiRiyal = 28;
var pkr = (10 * usDollar) + (25 * saudiRiyal);
document.write("Total Currency in PKR: " + pkr);


// Task # 10
document.write("<br><br>");
document.write("<h1>Arithmetic Calculations</h1>");
var Number1 = 6;
var result = Number1 + 5 * 10 / 2;
document.write("Result of calculations is: " + result);

// Task # 11
document.write("<br><br>");
var currentYear = 2020;
var yearOfBirth = 1991;
var age1 = currentYear - yearOfBirth;
var age2 = age1 - 1;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear);
document.write("<br>");
document.write("Birth Year: " + yearOfBirth);
document.write("<br>");
document.write("They are either " + age1 + " or " + age2 + " years old");

// Task # 12
document.write("<br><br>");
document.write("<h1>The Geometrizer</h1>");
var circleRadius = 20;
var circumference = 2 * 3.142 * circleRadius;
var areaOfCircle = 3.142 * circleRadius * circleRadius;
document.write("Radius of a circle: " + circleRadius);
document.write("<br>");
document.write("The circumference is: " + circumference);
document.write("<br>");
document.write("The area is: " + areaOfCircle );


// Chapters # 6 - 9

// Task # 1

var a = 10;
document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
document.write("<br><br>");
document.write("The value of ++a is: " + ++a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of a++ is: " + a++);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of --a is: " + --a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of a-- is: " + a--);
document.write("<br>");
document.write("Now the value of a is: " + a);

// Task # 2
document.write("<br><br><br>");
var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
//--a - --b + ++b + b--
//1   - 0   + 1   + 1
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);

// Task # 3
document.write("<br><br>");
var username = prompt("Enter your name:");
document.write("Welcome " + username + "!");

// Task # 5
document.write("<br><br>");
var subject1 = prompt("Enter name of First Subject: ");
var subject2 = prompt("Enter name of Second Subject: ");
var subject3 = prompt("Enter name of Third Subject: ");
var subject_marks = 100;
var total_subject_marks = subject_marks + subject_marks + subject_marks;
var obtained_subject1 = prompt("Enter marks obtained in First Subject: ");
var obtained_subject2 = prompt("Enter marks obtained in Second Subject: ");
var obtained_subject3 = prompt("Enter marks obtained in Third Subject: ");
var total_obtained_marks = (+obtained_subject1) + (+obtained_subject2) + (+obtained_subject3);
var total_percentage = (total_obtained_marks / total_subject_marks) * 100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td><script>document.write(subject1);</script></td><td><script>document.write(subject_marks);</script></td><td><script>document.write(obtained_subject1);</script></td><td><script>document.write(obtained_subject1 + '%');</script></td></tr><tr><td><script>document.write(subject2);</script></td><td><script>document.write(subject_marks);</script></td><td><script>document.write(obtained_subject2);</script></td><td><script>document.write(obtained_subject2 + '%');</script></td></tr><tr><td><script>document.write(subject3);</script></td><td><script>document.write(subject_marks);</script></td><td><script>document.write(obtained_subject3);</script></td><td><script>document.write(obtained_subject3 + '%');</script></td></tr><tr><td></td><td><script>document.write(total_subject_marks);</script></td><td><script>document.write(total_obtained_marks);</script></td><td><script>document.write(total_percentage + '%');</script></td></tr></table>");


// Chapters # 9 - 11

// Task # 1

var city_name = prompt("Enter name of city: ");
if (city_name == "Karachi" || city_name == "karachi") {
    alert("Welcome to City of Lights!");
}

// Task # 2


var your_gender = prompt("Enter your gender: e.g. Male / Female");
if (your_gender == "Male" || your_gender == "male") {
    alert("Good Morning Sir!");
}
else (your_gender == "Female" || your_gender == "female") ;{
    alert("Good Morning Ma'am!");
}



// Task # 3

var traffic_signal = prompt("Enter color of road traffic signal: ");
if (traffic_signal == "Red" || traffic_signal == "red") {
    alert("Must Stop!");
}
if (traffic_signal == "Yellow" || traffic_signal == "yellow") {
    alert("Ready to move!");
}
if (traffic_signal == "Green" || traffic_signal == "green") {
    alert("Move now!");
}

// Task # 4
document.write("<br><br>");
var remaining_fuel = prompt("Enter remaining fuel in car (in litres): ");
if (remaining_fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Task # 5
document.write("<br><br>");
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Task # 6
document.write("<br><br>");
var marks_1 = prompt("Enter marks obtained in first subject: ");
var marks_2 = prompt("Enter marks obtained in second subject: ");
var marks_3 = prompt("Enter marks obtained in third subject: ");
var total_marks_obt = (+marks_1) + (+marks_2) + (+marks_3);
var total_marks_subjs = prompt("Enter total marks: ");
var percentage_of_marks = total_marks_obt / total_marks_subjs * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " +total_marks_subjs);
document.write("<br>");
document.write("Marks obtained: " +total_marks_obt);
document.write("<br>");
document.write("Percentage: " +percentage_of_marks + "%");
document.write("<br>");
if(percentage_of_marks >= 80) {
    document.write("Grade: A-one");
    document.write("<br>");
    document.write("Remarks: Excellent");
} 
else if(percentage_of_marks >= 70) {
    document.write("Grade: A");
    document.write("<br>");
    document.write("Remarks: Good");
} 
else if(percentage_of_marks >= 60) {
    document.write("Grade: B");
    document.write("<br>");
    document.write("Remarks: You need to improve");
    
}
else if(percentage_of_marks < 60) {
    document.write("Grade: Fail");
    document.write("<br>");
    document.write("Remarks: Sorry");
}



// Task # 7

var secret_num = 8;
var num_guess = prompt("Enter your guess of secret number: ");
if(num_guess == 8) {
    alert("Bingo! Correct answer");
}
else if(num_guess == secret_num + 1) {
    alert("Close enough to the correct answer");
}

// Task # 8

var num_to_check = prompt("Enter a number to check if it's divisible by 3 :");
if(num_to_check % 3 == 0) {
    alert("This number is divisible by 3");
}

// Task # 9

var num_even_odd = prompt("Enter a number to check if it's even or odd :");
if(num_even_odd % 2 == 0) {
    alert("Even number");
}
else {
    alert("Odd number");
}

// Task # 10

var temper_input = prompt("Enter the temperature: ");
if(temper_input > 40) {
    alert("It is too hot outside");
}
else if(temper_input > 30) {
    alert("The Weather today is Normal");
}
else if(temper_input > 20) {
    alert("Today's Weather is cool");
}
else if(temper_input > 10) {
    alert("OMG! Today's weather is so Cool");
}

// Task # 11

var calc_val1 = prompt("Enter your first value:");
var calc_sign = prompt("Enter your operator (+, -, *, /, or %)");
var calc_val2 = prompt("Enter your second value:");

if(calc_sign === '+') {
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (parseInt(calc_val1) + parseInt(calc_val2)));
} else if(calc_sign === '-'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 - calc_val2));
} else if(calc_sign === '*'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 * calc_val2));
} else if(calc_sign === '/'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 / calc_val2));
} else if(calc_sign === '%'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 % calc_val2));
}



