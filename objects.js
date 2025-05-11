// object literals and dot notations
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

// object literals and bracket notation
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
//With the brackets notation, I can add space characters inside property names
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}
//Additionally, I can add numbers (as the string data type) as property keys
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}
//Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}