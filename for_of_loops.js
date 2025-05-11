//an object is not iterable
// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }
//Contrary to objects, arrays are iterable
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//The Object.keys() method
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
//The Object.values() method
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
//The Object.entries() method
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}