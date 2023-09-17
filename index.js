/**
 * String formatting
 */
// Curly Brace / Backticks`${}`
//Example 1
var age = 40;
console.log(`I am ${age} years old.`);

//Example 2
var heightCentimeters = 160;
var sentence = `I am ${heightCentimeters}cm tall.`;
console.log(sentence);

// Concatenation + 
// Example 3
var age = 40;
console.log("I am " + age + " years old.");

// Example 4
var heightCentimeters = 160
console.log("I am " + heightCentimeters + "cm tall.");

// Double Quotes ""
// Example 5
var person = "Tom";
console.log("Hi my name is " + person);

//Example 6 ""
var location = "alaska";
console.log("I live in " + location.charAt(0).toUpperCase() + location.slice(1));
console.log(location)


// Single Quotes ''
//Example 7
var person = 'Tom';
console.log('Hi my name is ' + person + ".");

// Example 8 //single quote
var location = 'alaska';
console.log('I live in ' + location.charAt(0).toUpperCase() + location.slice(1) + '.');

// Format Specifiers
/**
 * %s       string
 * %i or %d integer
 * %f       floating
 */
// Example 9 - string
var petName = "Joe";
console.log("My pets name is %s", petName);

// Example 10 -Integer
var year = 2023;
console.log("The building was built in %d.", year);

// Example 11 - float
var grade = 3.2;
console.log("My GPA is %f.", grade);

/**
 * BESMAS / Arithemtics
 * 
 * Bracket         () - go first/most important
 * Exponent        **
 * Division         /
 * Multiplication   *
 * Addition         +
 * Subtraction      - - less important
 * 
 */

// Bracket
var z = (2 * 3) + 2;
console.log(z); // 8

var x = 2;
var y = 3;
var z = (x * y) + x
console.log(z); // 8

// Exponent
console.log(3 ** 4); // 81
console.log(3 * 4); // 12 not the same
console.log(3 * 3 * 3 * 3); //81

// Division
var a = 10;
var b =2;
var c = a / b; // 10 % 2

// Multiplication
var length = 5;
var width = 10;
var area = length * width;
console.log(area); // 50

// Addition
var marblesBagOne = 10;
var marblesBagTwo = 20;
var totalMarbles = marblesBagOne + marblesBagTwo;
console.log(totalMarbles); // 30

// Subtraction
var pies = 10;
var eat = 2;
var totalPies = pies - eat;
console.log(totalPies); // 8





