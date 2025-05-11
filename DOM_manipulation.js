//to create a simple h1 tag using browser DOM manipulation
const h1=document.createElement('h1')
h1.innerText="This is a h1 heading"
h1.setAttribute('id','heading')
h1.setAttribute('class','secondary')
document.body.appendChild(h1)