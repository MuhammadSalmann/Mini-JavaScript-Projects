const apiKey = '5f34bd6932f39815a077c0663a1d8d2d'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const weatherImg = document.querySelector('.weather-img')
const search = document.querySelector('.city-search')
const error = document.querySelector('.err-msg')
const cont = document.querySelector('.weather-cont')

const checkWeather = async (city) => {
    const response = await fetch(apiUrl+ city +`&appid=` + apiKey)
    const weatherData  = await response.json()
    // console.log(weatherData);

    if(response.status === 404) {
        error.style.display = 'block'
        cont.style.display = 'none'
    } else {
        document.querySelector('.city-name').innerHTML = weatherData.name;
        document.querySelector('.city-temp').innerHTML = Math.floor(weatherData.main.temp) + '°C';
        document.querySelector('.city-humi').innerHTML = weatherData.main.humidity + '%';
        document.querySelector('.city-wind').innerHTML = weatherData.wind.speed + ' km/h';
        // console.log(weatherData.weather[0].main);
    
        if(weatherData.weather[0].main == 'Clear') {
            weatherImg.src = 'images/clear.png'
        }
        else if(weatherData.weather[0].main == 'Clouds') {
            weatherImg.src = 'images/clouds.png'
        }
        else if(weatherData.weather[0].main == 'Drizzle') {
            weatherImg.src = 'images/drizzle.png'
        }
        else if(weatherData.weather[0].main == 'Rain') {
            weatherImg.src = 'images/rain.png'
        }
        else if(weatherData.weather[0].main == 'Mist') {
            weatherImg.src = 'images/mist.png'
        }
        else if(weatherData.weather[0].main == 'Snow') {
            weatherImg.src = 'images/snow.png'
        }
        error.style.display = 'none'
        cont.style.display = 'block'
    }
}

document.querySelector('button').addEventListener('click',()=> {
    checkWeather(search.value);
    search.value = ''
})