const original = document.querySelector('.span1')
const original2 = document.querySelector('.span2')
const btn1 = document.querySelector('button')
const btn2 = document.querySelector('button:nth-child(2)')
const p = document.querySelector('p')

let score;


const fn = (x,y) => {
    score = x + y
    original.textContent = score
}

fn(2,3)

const f1 = () => {
    const divide = score/2
    original2.textContent = divide
}

const f2 = () => {
    const multi = score*2
    original2.textContent = multi

}


btn1.addEventListener('click', f1)
btn2.addEventListener('click', f2)