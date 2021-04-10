import {
    apiKey
}from './code'

const btn = document.querySelector('button')

const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')

const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const input = document.querySelector('input')

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiIcon = 'http://openweathermap.org/img/wn/10d@2x.png'

const units = '&units=metric'
let city;
let url;

const getWeather = () => {
    // city = 'London'
    // console.log(input);
    // city = input.value
    city = (!input.value) ? 'Warsaw' : input.value;
    url = apiLink + city + apiKey + units;

    axios.get(url)
    .then(res => {
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;
        const status = Object.assign({}, ...res.data.weather);

        cityName.textContent = res.data.name;
        weather.textContent = status.main;
        temperature.textContent = Math.floor(temp) + '°C';
        humidity.textContent = Math.floor(hum) + '%';
        warning.textContent = '';
        input.value = ''

        console.log(status.id);
        if (status.id >= 200 && status.id < 300) {
            photo.setAttribute('src', '/img/thunderstorm.png')
        } else if(status.id >= 300 && status.id < 400) {
            photo.setAttribute('src', '/img/drizzle.png')
        } else if(status.id >= 400 && status.id < 500) {
            photo.setAttribute('src', '/img/rain.png')
        } else if(status.id >= 500 && status.id < 600) {
            photo.setAttribute('src', '/img/ice.png')
        } else if(status.id >= 600 && status.id < 700) {
            photo.setAttribute('src', '/img/fog.png')
        } else if(status.id >= 700 && status.id < 800) {
            photo.setAttribute('src', '/img/sun.png')
        } else if(status.id >= 800 && status.id < 900) {
            photo.setAttribute('src', '/img/cloud.png')
        } else {
            photo.setAttribute('src', '/img/unknown.png')
        }
    }).catch ( () => {
        warning.textContent = 'Wpiszo poprawnie'
    })
}

const enterCheck = () => {
    if(event.keyCode === 13) {
        getWeather()
    }
}
getWeather()
btn.addEventListener('click', getWeather)
input.addEventListener('keyup', enterCheck) 