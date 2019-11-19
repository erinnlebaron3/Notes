// https://mx.devcamp.com/pt-full-stack-development-javascript-python-react/guide/1247

function Invoice() {
    this.taxRate = 0.06;
}

const inv = new Invoice();
console.log(inv.taxRate)
//const inv and create a new invoice I can console log, and I have full access to this value so I can 
//say inv.taxRate and if I console.log of this out is going to print out 6 percent just like that.
//reason for that is because taxRate is simply an attribute inside of the object. It's just a 
//key-value pair that we can have access to, if you don't believe me then try to console log out Inv. Run this.


function Invoice(subTotal) {
    this.taxRate = 0.06;
}
  
const inv = new Invoice();
console.log(inv)

// essentially treating this invoice like it is a class 
//years and years javascript did not have an object-oriented type of syntax
//  because every type of function inside of javascript is an object and objects can have attributes. 
// developers started doing is they just started adding attributes to functions just like regular objects 
// and so were actually able to treat this like a normal one

// set interval
// set intervals is going to do is set Interval is a part of a very large object
//create a function inside of set interval
function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subtotal = Subtotal;
    this.total = setInterval(function totalNumbers() {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
  }, 2000);
}

const inv = new Invoice(200);
inv.total();

//center interval something you do quite a bit in modern development
// you want to be able to reference the object that you're inside
// you can see all of the different types of key-value pairs and all these different functions that are inside of it.

//very cool thing is that that's where arrow functions come in
function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;
  
    this.total = setInterval(() => {
      console.log((this.taxRate * this.subTotal) + this.subTotal);
      // console.log(this);
    }, 2000);
}
  //'this' is a place holder for parent
  
const inv = new Invoice(200);
inv.total();
// notice the only change we made was we converted it from one type of function just by a normal function 
//declaration into an arrow function. 

//many times where you don't want that there may be times where you use something like set 
//interval you do want access to the window object or whatever is inside.
 // In those cases that's when you would use a regular function declaration

 // probably use arrow functions 75% of the time
 // just a shorter way of writing functions.