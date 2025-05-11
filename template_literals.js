//it allows for variable interpolation
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
console.log(`Hello,
World
!
`)

//allows for expression evaluation. 
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 