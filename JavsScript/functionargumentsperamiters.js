// Function Arguments
// Firstt peramiter is followed by a comma then the second peramiter
// Exp. 1st peramiter is FIRSTNAME and the 2nd peramiter is LASTNAME
function fullName(firstName, lastName) {
}

// Function Decleration with two arguments
function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}
// To call it you need to:
fullName('Kristien', 'Hudgens');
"HUDGENS, KRITIEN"


// can have multiple conditionals by adding 2 ampersands ||
// 2 ampersands or pipes || means 'or'
function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));


// Reference vs Value
// you are going to pass in objects and those are going to get treated by reference which mean they're not actually grabbing the values they're grabbing a reference to the original object.


function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"