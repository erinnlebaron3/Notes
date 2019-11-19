// Data-Types
//boolean = only has two variables!!!!!!
  
// Boolean
var truthy = true;
var notTruthy = false;

// Null zero value
var nully = null;

// Undefined
var notDefined;

// Number
var age = 12;

// String
var name = "Kristine";
var nameTwo = 'Jordan';

// Symbol
var mySym = Symbol('foo');

// foo or bar mean nothing!!!!!

// console.log(mySym);

var ageTwo ='33';
    undefined

Number(ageOne);
12

parseFloat(33.5)


'100' + 42;
10042

Number('100') + 42;
142

Boolean
Number(true);
1
Number(false);
0

let myNumber = 12
let myNewString = myNumber.toString();

var str = attrubute

var str = 'the quick brown fox jumped over the lazy dog';
undefined
str.length;
44
str.length();

// sting 
// str.charAt(2);  all string values start with 0!
"e"

str.charAt(200);
""
str.charAt(3);
" "
str.concat(' again and again');
str;"the quick brown fox jumpedover the lazy dog"
str;
var newStr = str.concat(' again and again');
undefined

// boolean

str.includea('quick');
true
str;
"the quick brown fox jumped over the lazy dog"
str.includes('foo');
false
str.startsWith('the');
str.startsWith('quick');
str.endsWith('quick');
false
str.endsWith('g');
true
str.endsWith('lazy dog')
true



// repeat

var str = 'the quick brown fox jumped over the laze dog';
undefined
str.repeat(5);
"the quick brown fox jumped over the laze dog the quick brown fox jumped over the laze dog the quick brown fox jumped over the laze dog the quick brown fox jumped over the laze dog the quick brown fox jumped over the laze dog"
str;
"the quick brown fox jumped over the laze dog"
str.match(/((\d{3}\) ?)|(\d{3}-))?\d{3}-\{4}/);
null
'555-555-5555 is my number' .search(/((\d{3}\) ?)|(\d{3}-))?\d{3}-\{4}/);
0
'foo' .search(/((\d{3}\) ?)|(\d{3}-))?\d{3}-\{4}/)

// jumped

str;
"the quick brown fox jumped over the laze dog"
str.indexOf('jumped');
20
var str2 = str.concat(' again and again');
undefined
str2; 
"the quick brown fox jumped over the laze dog"
str2.indexOf('again');
45
str2.lastIndexOf('again');
55

var stringOne = "the dog meaows"
undefined
var replacedString = stringOne.replace('dog', 'cat');
undefined
replacedString
"the cat meaows"
var  stringTwo = "the cow jumped over the moon"
undefined
indexOfOver = stringTwo.indexOfOver
undefined
replacedString
"the cat meaows"
stringTwo.indexOf('over');
15

// slicing
str;
"the quick brown fox jumped over the lazy dog"
str.slice(10);
"brown fox jumped over the lazy dog"
str.charAt(10);
"b"
str.slice(-8);
""
str.slice(-8);
"lazy dog"
str.slice(4, 9);
"quick"
str.slice(4, 10).trim();
"quick"

// toUpperCase();
str.toUpperCase();
"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"


// coding test
// var sum = 0;
// undefined
// var lemons = 250
// undefined
// var limes = 36
// undefined
// sum += lemons
// 250
// sum += limes
// 286



/*
/* order of operations
PEMDAS -> PEDMAS
please excuse my dear aunt sally
parenthasis
exponents
multiplication
division
addition
subtraction
*/
var num = 5 + (5 * 10) / 6**2 - 1;
console.log(num);


var num = 5 + 5 * 10;
console.log(num);


/* conditionals


var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}

// ternary operator!!!
function ageVerification(age) {
  // if (age > 25) {
  //   console.log('can rent a car');
  // } else {
  //   console.log("can't rent a car");
  // }

  return age > 25 ? "can rent a car" : "can't rent a car";
}

ageVerification(30); //?
ageVerification(10); //?

function adminControls(user) {
  // if (user) {
  //   if (user.admin) {
  //     return 'showing admin controls...';
  //   } else {
  //     return 'You need to be an admin';
  //   }
  // } else {
  //   return 'You need to be logged in';
  // }

  return user
    ? user.admin ? "showing admin controls" : "You need to be an admin"
    : "you need to be logged in";
}

const userOne = {
  name: "Kristine",
  admin: true
};

adminControls(userOne); //?

const userTwo = null;

adminControls(userTwo); //?

const userThree = {
  name: "Tiffany",
  admin: false
};

adminControls(userThree); //?


Basic Syntax for building funtions!!!
function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; // undefined

var storedTextTwo = hiThereTwo();

storedTextTwo; // "Hi there again

//////differance between function expressions and function declaration

var age= 3;

if (age <= 10) {
  var buildMenu = function () {
    return "Kid's menu";
  };
  
  function buildMenuTwo () {
    return "Another kids' menu";
  }
  console.log(buildMenu));
  console.log(buildMenuTwo));
}





////how to work with function arguments!!!
funtion fullName(firstName, lastName) {
  return lastName.toUpperCase() + ", " + firstName.toUpperCase();
}

fullName('Kristine', 'Hudgens');
"HUDGENS, KRISTINE"
function sample(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
// } undefined

funtion fullName(firstName, lastName, language) {
  var language = language || 'English'; /* || or|| */
  return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}
  console.log(fullName('Jordan', 'Hudgens'))




  ////FUNCTION ARGUENTS: REFERNCES VS VALUE!!!
  var someUser = {
    name: 'jordan'
  }
  
  function nameFormatter (user) {
    return user.name = 'Oops';
  }
  
  nameFormatter(someUser); //"Oops"
  someUser; //Object {name:"Oops"}
  
  var someUser = 'Tiffany';
  
  function someOtherNameFormatter(name) {
    return name = 'Oops';
  }
  
  someOtherNameFormatter(someName); //"Oops"
  someName; //"Tiffany"
  
  funtion nameFormatter (userName) {
    return = 'Oops';
  }
  
  someUser.name; //"Oops"
  someUser.name = 'Kristine';
  nameFormatter(someUser.name); //"Oops"
  someUser.name; //"Kristine"
  


//////introduction to javascript closures////////
  function battingAverage () {
    var hits = 100;
    var atBats = 300;
    
    return {
      getCurrentAverage: function () {
        return (hits/atBats);
      },
      updateHitsAndAtBats: function (hit, atBat) {
        hits += hit;
        atBats += atBat;
      }
    }
  }
  
  var altuve = battingAverage();
  console.log(altuve.getCurrentAverage());
  altuve.updateHitsAndAtBats(0, 20);
  console.log(altuve.getCurrentAverage());
  0.3333333333333333
  VM138:19 0.3125


 //// INTRODUCTION TO HTML SCRIPTING WITH BUILT IN JAVASCRIPT FUNCTION//////
  document.getElementsByClassName('b1')[0].innerHTML = "Hi there";

  /////how to use the 'this' keyword in javascript programs///

var guide = {
  title: 'Guide to Programming',
  content: 'Content goes here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    }
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {
      console.log(this.title + " - " + this.content);
    } else {
      this.content = '';
      console.log(this.title + " - " + this.content);
    }
  }
}

user = { role: 'paid' };
guide.renderContent(user.role);
/CONSOLE/
"Guide to Programming - Content goes here..."


///HOW TO LOOP THROUGH A JAVASCRIPT OBJECT////

var student = {
  name: 'kristine',
  age: 12,
  city: 'sctottsdale'
};

for (var key in student) {
  console.log(key + " => " + student[key]);
}

Console
Clear 
"name => kristine"
"age => 12"
"city => sctottsdale"


///CODING EXCERCISE
var user = {
  name: 'chantelle',
  email: 'chantelle711@gmail.com', 
  phone: 6361157002
};

for (var key in user) {
  console.log(key + " => " + user[key]);
}

var user = {
  name: 'chantelle',
  email: 'chantelle711@gmail.com', 
  phone: 6361157002
};

for (var key in user) {
  console.log(key + " => " + user[key]);
}


Console
Clear 
"name => chantelle"
"email => chantelle711@gmail.com"
"phone => 6361157002"



/////GUIDE TO WHILE AND DO/WHILE LOOPS IN JAVASCRIPT///

var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

var i = 0;
do {
  console.log(players[i]);
  i++;
} while (i < players.length)


Console
Clear 
undefined
"Altuve"
"Bregman"
"Correa"
"Springer"
"Altuve"
"Bregman"
"Correa"
"Springer"

///CODING EXERCISE///
Coding Exercise
In the below starter code, place 4 dog names (elements) of your choice. 
Write a while loop that iterates through the dogHouse array. 
The iterator variable must be named "data"
var dogHouse = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

var data = 0;
while (data < dogHouse.length) {
  console.log(dogHouse[data]);
  data++;
}


///RUNNING GOOGLE SEARCH QUERIES IN JAVASCRIPT///


$('.gsfi').value = ''

$('.target').childNodes[2].You got this

document.querySelector(".target");

///HOW TO PULL IMAGES FROM INSTAGRAM 
///WITH JAVASCRIPT///
// CODING EXERCISE//
const selector = document.querySelectorAll(".grab-these");


//AUTO FOLLOWING ACCOUNTS AND HASHTAGS 
//ON LINKEDLN WITH JAVASCRIPT

//CODING EXERCISE
const nodeList = document.querySelectorAll(".snake");


//// COMMAND LINE CHEAT SHEET ALIAS///

```    CMD Command    | UNIX Command |   PowerShell Command  | PowerShell Alias |
|-------------------|--------------|-----------------------|------------------|
| dir               | ls           | Get-ChildItem         | gci              |
| cls               | clear        | Clear-Host (function) | cls              |
| del, erase, rmdir | rm           | Remove-Item           | ri               |
| copy              | cp           | Copy-Item             | ci               |
| move              | mv           | Move-Item             | mi               |
| rename            | mv           | Rename-Item           | rni              |
| type              | cat          | Get-Content           | gc               |
| cd                | cd           | Set-Location          | sl               |
| md                | mkdir        | New-Item              | ni               |
| pushd             | pushd        | Push-Location         | pushd            |
| popd              | popd         | Pop-Location          | popd             |
