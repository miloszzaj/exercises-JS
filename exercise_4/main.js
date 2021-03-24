let newDiv = null;
const ul = document.createElement('ul')
document.body.appendChild(ul)

for(let i = 1; i < 4; i ++) {
    newDiv = document.createElement('li');
    ul.appendChild(newDiv)
    newDiv.innerText = i
}

const last = document.querySelector('li:last-child')
last.textContent = 'ostatni element'

console.log(last);
