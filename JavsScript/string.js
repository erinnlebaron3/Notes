// function encapulates behavior
var STR = 'The quick brown fox jumped over the lazy dog';

str.length(); 
// attribute not function

str.charAt(2);
"e"
// so computer science starts with 0 thats why the 'e' is three. Always start at 0

str.charAt(200);
""
// index that doesn't have index value comes as empty string
str.charAt(3);
" "
// 
str.concat('again and again');
"The quick brown fox jumped over the lazy dog again and again"
str;
"The quick brown fox jumped over the lazy dog"
var neStr = str.concat('again and again');
// undefined

// these functions return Bullon
str.includes('quick');
true
str;
"The quick brown fox jumped over the lazy dog"
str.includes('Foo');
false
str.startswith('quick');
true
str.endswith('quick')
false
str.endswith('g');
true
str.endswith('lazy dog');
true
// checks out sentence to find and pull information from a database

// repeat
var STR = 'The quick brown fox jumped over the lazy dog';
str.repeat(5);
'The quick brown fox jumped over the lazy dog','The quick brown fox jumped over the lazy dog','The quick brown fox jumped over the lazy dog','The quick brown fox jumped over the lazy dog','The quick brown fox jumped over the lazy dog'
str;
'The quick brown fox jumped over the lazy dog'

// regular expresion compare javascript with string to see if there is something reconized 
// works for web form validation so like email forms match or enter valid email
str.match();

str.replace('fox','wolf');
"The quick brown wolf jumped over the lazy dog"

// Search
// looks for pattern when it finds it returns with index
.search();

// index

var STR = 'The quick brown fox jumped over the lazy dog';

str.indexOf('jumped');
20
var str2 = str.concat('aganin and aganin');

str2;
"The quick brown fox jumped over the lazy dog again and again"
str2.indexOf('again');
45
str2.lastIndexOf('again');
55

// slice
// grabs everything from the bracket numver forward with positive numbers and back for negative numbers
var str = "The quick brown fox jumped over the lazy dog"
undefined
str;
"The quick brown fox jumped over the lazy dog"
str.slice(10);
"brown fox jumped over the lazy dog"
str.charAt(10);
"b"
str.charAt(-8);
""
str.slice(-8);
"lazy dog"
str.slice(4, 10);
"quick "
str.slice(4, 9);
"quick"
str.slice(4, 10).trim();
"quick"
str.toUpperCase();
"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
str.toLocaleLowerCase();
"the quick brown fox jumped over the lazy dog"




