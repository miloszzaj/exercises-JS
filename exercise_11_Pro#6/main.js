const bur = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const times = document.querySelector('.fa-times')
const nav = document.querySelector('nav')

// times.classList.add('hide')

const fn1 = () => {
    bur.classList.toggle('active')
    nav.classList.toggle('active')


    if(bur.classList.contains('active')) {
        bars.classList.add('hide')
        times.classList.remove('hide')
    } else {
        bars.classList.remove('hide')
        times.classList.add('hide')
    }
}
bur.addEventListener('click', fn1)
