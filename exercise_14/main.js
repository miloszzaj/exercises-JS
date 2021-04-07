const text = document.querySelector('.text')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')


function Dinner (name, price) {
    this.name = name;
    this.price = price;
}

Dinner.prototype.say = function() {
    text.innerText = `${this.name} kosztuje ${this.price},-`
}

const sch = new Dinner('schabowy', 30)
const miel = new Dinner('mielony', 25)
const fry = new Dinner('fryteczki', 15)

one.addEventListener('click', function fn1() {sch.say()})
two.addEventListener('click', function fn1() {miel.say()})
three.addEventListener('click', function fn1() {fry.say()})