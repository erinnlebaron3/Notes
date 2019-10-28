
// global because has not function()
var userObj = {
    email: 'sample@example.com',
    fullName: 'Kristine Hudgens'
  }
  
// function
// function dashboardGreeting() {
//     console.log("Hi there, ".concat(userObj.fullName));
// }


// local because it has a () function
  function dashboardGreeting() {
    var userObj = {
      email: 'sample2@example.com',
      fullName: 'Jordan Hudgens'
    }
    console.log("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  console.log(userObj.fullName);

//  important to put VAR or LET whenever you're declaring a variable. if not used you can accidently create a global function
//  whenever you're using these functions you want to make sure you keep them local
// Make sure you put a VAR there and then try to prevent yourself from using too many global variables 

// Local -- means local to the function
// Global -- something that can be accessed anywhere