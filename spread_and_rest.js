//spread operator
const top3=['Pokhara','Kathmandu','Butwal']
function visitPlaces(var1, var2, var3){
    console.log("Visit", var1);
    console.log("Then visit", var2);
    console.log("Finally visit", var3)
}
visitPlaces(...top3);

//rest operator
const top5=['Pokhara','Kathmandu','Butwal','Janakpur','Dang']
const []=top5;
const [first,second,third, ...secondVisit]=top5;
console.log(first);
console.log(second)
console.log(third)
console.log(secondVisit);

//Join arrays, objects using the rest operator
const fruit1=['apple','mango']
const fruit2=['kiwi','guava']
const conbineFruits=[...fruit1, ...fruit2]
console.log(conbineFruits)

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//Add new members to arrays without using the push() method
let Veggie=['onion', 'parsely']
Veggie=[...Veggie, 'carrot','garlic']
console.log(Veggie)

//Convert a string to an array using the spread operator
let name='Ashim';
let arr=[...name];
console.log(arr)

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)



function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);