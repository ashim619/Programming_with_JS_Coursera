// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }

// more efficient approach, especially in more complex scenarios.
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
    h1.innerText = input.value
})