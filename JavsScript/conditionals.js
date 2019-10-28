// allow dynamic behavior aka if you do this then i will let you do this

// IF-ELSE CONDITIONS

var age = 12;
var ageTwo = '25';
 
// EQUAL!!!!

 if (age === ageTwo) {
   console.log('They are equal')
 }
 
// BANG MEANS OPPOSITE SYMBOLIZED BY THE !

 if (age != ageTwo) {
   console.log('not equal')
 }

// GREATER THAN OR EQUAL TO

 if (age >= 25) {
   console.log('old enough to rent a car')
 }

// LESS THAN OR EQUAL TO

 if (age <= 10) {
  console.log('You can eat from the kid menu')
 }

// ELSE IF NOT

var age = 30;

if (age <=10) {
  console.log('You can eat from the kid menu')
}else {
  console.log('Adult menu time for you!')
}

// ELSE STATEMENTS WITH CONDITIONALS

var age = 8;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 10 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
}
"You can eat from the kid's menu"
"You are not old enough to drive"
"You are not old enough to rent a car"

var age = 16;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 10 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
}
"You can not eat from the kid's menu"
"You are old enough to drive"
"You are not old enough to rent a car"

var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 10 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
}  else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}
"You can not eat from the kid's menu"
"You are old enough to drive"
"You are old enough to rent a car"

// SWITCH STATEMENTS
// case statement- gives you the ability to build your own senarios

// GET A STRING
var dataPoint = 'Hi there';

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string!");
    break;
  case "number":
    console.log('Its a number');
    break;
  case "boolean":
    console.log('Its a boolean');
    break;
}
"It's a string!"

// GET A NUMBER
var dataPoint = 5;

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string!");
    break;
  case "number":
    console.log('Its a number');
    break;
  case "boolean":
    console.log('Its a boolean');
    break;
}
"Its a number"


// IF CANT FIND ANY CASE GO TO DEFAULT


  // (default:
    console.log('No matches');
