function addNum(a,b) {
var a;
var b;
var c=a+b;
console.log(c);
}
addNum(2,3);
addNum(3,6)

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")