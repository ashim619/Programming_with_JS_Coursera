//range error
console.log((10).toString(2))
//The value of 2 when passed to the toString() method, is like saying to JavaScript: "convert the value of 10 of the Base 10 number system, to its counter-part in the Base 2 number system".
console.log((10).toString(8))
console.log((10).toString(100))
//ReferenceError
console.log(username);
//SyntaxError
var a "there's no assignment operator here";
//TypeError
"hello".pop() // Uncaught TypeError: "hello".pop is not a function