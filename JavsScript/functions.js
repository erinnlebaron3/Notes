// the way a function works is it's kind of like a machine. Takes info in and then returnes a different value.


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

storedTextTwo; // "Hi there again"

// Void function- will run but doesn't return anything

// FUNCTION DECLERATION
// function greeting(){}
// return 'Hi there!'
// }


// FUNCTION EXPRESSION -  is a function that is stored inside of a variable.
// var greeting = function () {
//     return "Hi there!";
//  };


   var greeting = function () {
    return "Hi there!";
   };
   
   var age = 4;
   
   if (age <= 10) {
     var buildMenu = function () {
       return "Kids' Menu";
     };
   
     function wrongMenuBuilder () { 
       return "Wrong Kids' Menu";
     }
   
     console.log(buildMenu());
     console.log(wrongMenuBuilder());
   }

// Function Expression - if you have something that you need to be able to move around or a function you need to be able to create at any given point.
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

// CLOSURES 
// So essentially what a closure is, is it's being able to wrap up an entire set of behavior and usually wrapped up in a function and be able to use that, pass it around, and call it however you need to.

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
var altuve = battingAverage ();
console.log(altuve.getCurrentAverage());
// 0.3333333333333
altuve.updateHitsAndAtBats(0,20);
console.log(altuve.getCurrentAverage());
// 0.3125


// Keyword 'this' this refers to is the specific item that we're looking to process the specific item that we're looking to do our work with

var guide = {
  title: 'Guide to programing',
  content: 'Content will go here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    } 
    
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {
      console.log(this.title + "-" + this.content);
    } else {
      this.content = '';
      console.log(this.title + "-" + this.content);
    }
  }
}

user = { role: 'paid'};
guide.renderContent(user.role);

// answer "Guide to programing-Content will go here..."

