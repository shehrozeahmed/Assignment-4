//  Chapters 21-25

// task-01
var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);



//  task-02
var favMobile = prompt("Enter the name of your favorite mobile model: ", "Samsung Galaxy S6 Edge");
var favMobileLen = favMobile.length;
document.write("<br> My favorite phone is: " + favMobile);
document.write("<br> Length of string: " + favMobileLen);

//  task-03
var myWord = "Pakistani";
var indexOfn = myWord.indexOf("n");
document.write("<br> String: " + myWord);
document.write("<br> Index of 'n': " + indexOfn);

//  task-04

var Word = "Hello World";
var indexOfLastL = Word.lastIndexOf("l");
document.write("<br> String: " + Word);
document.write("<br> Last index of 'l': " + indexOfLastL);

// task-05

var Word = "Pakistani";
var indexOf3rdLetter = Word.charAt(3);
document.write("<br> String: " + Word);
document.write("<br> Character at index 3: " + indexOf3rdLetter);

//task-06


var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName.concat(lastName);
alert("Hello, " + fullName);


// task-07

var originalWord = "Hyderabad";
var afterReplace = originalWord.replace("Hyder", "Islam");
document.write("<br> City: " + originalWord);
document.write("<br> After replacement: " + afterReplace);

// task-08

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");
document.write("<br> Original message: " + message);
document.write("<br> Updated message: " + updatedMessage);


//task-09

var string = "472";
var stringInNumber = parseInt(string);
document.write("<br> Value: " + string);
document.write("<br> Type: string");
document.write("<br> Value: " + stringInNumber);
document.write("<br> Type: number");


//task-10

var userInput = prompt("Enter the word: ");
var userInputInUpperCase = userInput.toUpperCase();
document.write("<br> User input: " + userInput);
document.write("<br> Upper case: " + userInputInUpperCase);


//task-12

var num = 35.36;
var numInString = num.toString().replace(".", "");
document.write("<br> Number: " + num);
document.write("<br> Result: " + numInString);

//task-13

var userName = prompt("Enter your name: ");
if ((userName.indexOf("@") > 0) || (userName.indexOf(".") > 0) || (userName.indexOf(",") > 0) || (userName.indexOf("!") > 0)) {
    alert("Please enter a valid username");
}



//task-14
document.write("<br>")
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var item = prompt("welcome to ABC bakery.. what do you want sir/Madam??").toLowerCase()
for (var i = 0; i < a.length; i++) {
    if (item == a[i]) {
        document.write(item + " is available at index " + a.indexOf(item) + " in our bakery");
        break;
    }
}
if (item !== a[i]) {
    document.write("We are sorry, " + item + " is not available in our bakery")
}

//task-15

var university = "University of Karachi";
 /* to seperate each character of the string */
 var myArray = university.split("");
 document.write("<br>")
 for (var i = 0; i < myArray.length; i++){
     document.write(myArray[i]);
     document.write("<br>")
 }


//  task-17

var input = prompt('Enter a city name');
 var lastindex = input.slice(-1);
document.write(" User Input : "+ input + " <br> "+ "Last Character of input : " + lastindex);


