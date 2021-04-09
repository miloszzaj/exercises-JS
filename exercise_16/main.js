const url = 'https://api.thecatapi.com/v1/images/search'

const btn = document.querySelector('.one')
const img = document.querySelector('img')

btn.addEventListener('click', function() {
fetch(url)
.then(res => res.json())
// .then(res => console.log(res[0].url))
.then(res => {
    img.setAttribute('src', res[0].url)
    img.style.width = '500px'

})
.catch(err => console.log(err))
})

