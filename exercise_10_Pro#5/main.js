const con = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let farent;
let cel;

const fn1 = () => {
    if(one.innerText === '°C') {
        one.innerText = '°F'
        two.innerText = '°C'
        result.innerText = ''
        } else {
        one.innerText = '°C'
        two.innerText = '°F'
        result.innerText = ''
    }
}

const celToFar = () => {
    farent = con.value * 1.8 + 32
    result.innerText = `${con.value} C to ${farent.toFixed(1)} F`
    con.value = ''
}
const farToCel = () => {
    cel = (con.value - 32)/1.8
    result.innerText = `${con.value} F to ${cel.toFixed(1)} C`
    con.value = ''
}

const conversion = () => {
    if(con.value !== '') {
        if(one.innerText === '°C') {
            celToFar()
        } else {
            farToCel()
        }
    } else {
        result.innerText = 'wpisz jakieś dane'
    }
}

const reset = () => {
    result.innerText = ''
    con.value = ''
}

resetBtn.addEventListener('click', reset)
convBtn.addEventListener('click', conversion)
changeBtn.addEventListener('click', fn1)


