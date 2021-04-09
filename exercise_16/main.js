const url = 'https://api.thecatapi.com/v1/images/search'
const url2 = 'https://thatcopy.pw/catapi/rest/'

const btn = document.querySelector('.one')
const img = document.querySelector('img')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')



btn.addEventListener('click', function() {
fetch(url)
.then(res => res.json())
// .then(res => console.log(res[0].url))
.then(res => {
    img.setAttribute('src', res[0].url)
    img.style.width = '500px'

})
.catch(err => console.log(err))

axios.get(url2)
// .then(res => console.log(res))
.then(res => {img2.setAttribute('src', res.data.url)
img2.style.width = '500px'
})

async function showImg() {
    const beer = await axios.get(url2)
    img3.setAttribute('src', beer.data.url)
img3.style.width = '500px'
}
showImg()
})
