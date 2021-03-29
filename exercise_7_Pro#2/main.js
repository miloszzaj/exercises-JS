const btn = document.querySelector('button')
const item1 = document.querySelector('.item1')
const fas = document.querySelector('.fas')

const fn = () => {
    if(item1.classList.contains('hide')) {
        item1.classList.remove('hide')
        fas.style.transform = 'rotate(360deg)'
    } else {
    item1.classList.add('hide')
    fas.style.transform = 'rotate(180deg)'

    }
}

btn.addEventListener('click', fn)


// fas fa-angle-double-up