//recursive function in an infinite loop
// function myDay() {
//     console.log('Morning');
//     console.log('Afternoon');
//     console.log('Evening');
//     myDay();
// }
let counter=3;
function example(){
    console.log(counter);
    counter=counter-1;
    if(counter==0){
        return;
    }
    example();
}