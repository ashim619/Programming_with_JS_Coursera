function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    arr.pop();
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']

var clothes=[];
clothes.push('Jeans')
clothes.push('Sweatshirt')
clothes.push('Shirt')
clothes.push('Coat')
clothes.push('Blazer')
clothes.pop();
clothes.push('Jockers')
console.log(clothes[2]);
var favCar={};
favCar.color='Blue';
favCar.convertible=true;
console.log(favCar);