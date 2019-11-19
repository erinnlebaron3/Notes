// https://mx.devcamp.com/pt-full-stack-development-javascript-python-react/guide/1246

// Same function written as function declaration
//() is where you put your arguments
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => { 
    console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
//the world's most basic arrow function
//First it always has to be stored inside of a variable or or executed right away
//instead of adding the function name we just have these perands followed by an arrow 
//followed by what we want to execute.
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
//prints name and turns it to uppercase letters
//one arrgument doesnt need ()
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');


// an arrow function is just another way of defining a function it's another way of setting up some process that you 
//want to wrap up you want to encapsulate and then you want to call it later which is at its most base case it is 
//exactly what a function is.