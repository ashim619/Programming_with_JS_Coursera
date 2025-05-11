function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number