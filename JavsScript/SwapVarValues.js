// https://mx.devcamp.com/pt-full-stack-development-javascript-python-react/guide/1248

//  "let" lets you swap values

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';


// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);



it("when those cars won't pick a lane", function() {
    expect(roadRage()).toEqual("That Honda and Chevy won't pick a lane");
});

//JS does not allow for mass assingment but to get around it wrap values in []

