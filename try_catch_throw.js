// try{
//     console.log(a+b);
// }
// catch(err){
// console.log(err);
// console.log('There was an error')
// console.log('Reference error was encountered')
// }
// console.log("The program doesn't stop");

try{
    throw new TypeError()
}
catch(err){
console.log(err);
console.log('There was an error')
console.log('Type error was encountered')
}
console.log("The program doesn't stop");
