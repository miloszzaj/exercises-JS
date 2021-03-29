const up = document.querySelector('.sizeUp')
const down = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const text = document.querySelector('p')

let fontS = 36;

const fn1 = () => {
    fontS += 5;
    text.style.fontSize = `${fontS}px`
}

const fn2 = () => {
    fontS -= 5;
    text.style.fontSize = `${fontS}px`
}

const fn3 = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    text.style.color = `rgb(${x}, ${y}, ${z})`
}

up.addEventListener('click', fn1)
down.addEventListener('click', fn2)
color.addEventListener('click', fn3)