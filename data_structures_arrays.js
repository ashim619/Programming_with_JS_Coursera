//hree specific methods that exist on arrays
//The forEach() method
const fruits=['kiwi','mangoes','apples','grapes'];
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit} `);
}
fruits.forEach(appendIndex);

const fruits2=['kiwi','mangoes','apples','grapes'];
fruits.forEach(function(fruit, index){
    console.log(`${index}. ${fruit} `);
});

//The filter() method
const nums=[0,10,20,30,40,50];
nums.filter(function(num){
    return num>20;
});

//The map method
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})