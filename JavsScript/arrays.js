// array is a collection of data
// arrays are kind of like a shopping cart, You have more space to have more things
// Arrays used with API and Querry
// To call differnt Arrays in different index/nested add brackets[] with number of what object you want
// To call a function you are going to be the exact same way that we had call a regular function. we just put our nice parends at the end 
// whenever you see an array it has just like a string a built in property called Link


// Code for Array is
Array

// litteral Array with intigers
var literalArray = [1, 2, 3];

literalArray; // (3) [1, 2, 3]


// literal Array with strings
var literalArray = ['Altuve', 'Correa', 'Spring'];

literalArray;  // (3) ['Altuve', 'Correa', 'Spring']


// nested mixed Array
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there');}]

// mixed Array with a function
mixedArray[4]; // function greeting( ) { console.log('hey there');}

mixedArray[4](); // hey there

// Generated Array
var generatedArray = new Array(3); // [undefined, undefined, undefined]

// Literal Array
var literalArray = [1, 2, 3];

// Mixed Array
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }];


// Adding and Removing Arrays from []

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
 
// pop removes or adds the last ement
arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

// push removes and adds the last element
arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

// Adds and takes away fist one
arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']

// Adds item to Array list
arr.unshift('Kyle'); 3

arr; // ['Kyle', 'Bregman', 'Correa']

// Splice removes and adds to middle
// Splice allways returns an array

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]

