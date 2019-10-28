

//  looping through collections of data
// index starts at 0


var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
// player doesn't actually represent the value. Player represents the index(number in column it is)
// whatever your array has a plural name like players the common convention is to make your iterator variable to be singular
  for (player in players) {
    console.log(players[player]);
  }
  
//   For Loop
// i++ two pluses adds one everytime it loops 
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
// For Each Loop
// to pass functions around
// it takes an argument but we're technically not going to be passing an argument in because all of this happens automatically
// This is a function being called on a collection
  players.forEach(function(element) {
    console.log(element);
  });

//Loop an object
// var key makes it local

var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }

 
//While Do/While Loops
// do while loop can do something that none of the other loops can do, that is it can perform and guarantee that it will run at least one time.
// do loop the condition is checked after the iteration
//  while loop it's checked first.

var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;
  while (i < players.length) {
    console.log(players[i]);
    i++;
  }
  
  var i = 21;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length)
  
