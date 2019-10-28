// ternary operator allows you to do is to write an entire conditional on a single line. if else statement on a single line
// ternary operator used in JSX and HTML
// JSX looks like HTML



function ageVerification(age) {
    // if (age > 25) {
    //   console.log('can rent a car');
    // } else {
    //   console.log("can't rent a car");
    // }

// TERNARY CODE:
// conditional - if has permission = part 1 -----------(age > 25)
// if conditional was true - goes after ? = part 2 ----("can rent a car")
// if conditional was fals - goes after : = part 3 ----("can not rent a car")

    return age > 25 ? "can rent a car" : "can't rent a car";
  }
  
  ageVerification(30); //(can rent a car)
  ageVerification(10); //(can not rent car)

  // EXAMPLE:

  function ageVerification(age) {
    if (age > 25) {
        console.log('can rent a car');
    } else {
        console.log('is not old enough yet');
    }
}

{
  let answer = age > 25 ? "can rent a car" : "can't rent a car";
  console.log(answer);
}

  // COMPOUND CONDITIONAL:
  
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
  
  adminControls(userOne); //True
  
  const userTwo = null;
  
  adminControls(userTwo); //False
  
  const userThree = {
    name: "Tiffany",
    admin: false
  };
  
  adminControls(userThree); //False

  // Nested conditional syntax that lets you write conditional all on one line
  let response = user ? (user.admin ? "showing admin controls..." : "You need to be an admin") : "You need to be logged in";

  console.log(response);