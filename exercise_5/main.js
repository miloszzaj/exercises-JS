const btn1 = document.querySelector('button')
const btn2 = document.querySelector('button:nth-child(2)')
const par = document.querySelector('p')

const fn1 = () => {
    par.classList.remove('hide')
    par.classList.add('show')
}

const fn2 = () => {
    par.classList.add('hide')
}

// btn1.addEventListener('click', fn1)
// btn2.addEventListener('click', fn2)

const tg = () => {
    par.classList.toggle('hide')
}

btn1.addEventListener('click', tg)