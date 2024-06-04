let app_weather__date = document.querySelector('.app_weather__date')
let app_weather__name = document.querySelector('.app_weather__name')
let app_weather__description = document.querySelector('.app_weather__description-text')
let app_weather__temp = document.querySelector('.app_weather__temp')
let app_weather__detail_humidity = document.querySelector('.app_weather__detail_humidity-num')
let app_weather__detail_wind = document.querySelector('.app_weather__detail_wind-num')
let app_weather__detail_visibility = document.querySelector('.app_weather__detail_visibility-num')
let inputBtn = document.querySelector('.app_weather__input-btn')
let inputText = document.querySelector('.app_weather__input-value')


init()
function init() { 
    document.querySelector('.app_weather__input-value').focus()
    fetchData('Ho Chi Minh')
}
app_weather__date.innerHTML = new Date().toDateString()

inputBtn.addEventListener('click', function() {
    let cityName = inputText.value.trim()
    fetchData(cityName)
})
document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        let cityName = inputText.value.trim()
        fetchData(cityName)
    }
    
})

async function fetchData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=455c2d305aa01e4578d8d24231525ff9`)
    const data = await response.json();
    let temperature = Math.round(data.main.temp - 273.15)
        let visibility = data.visibility / 1000
        app_weather__name.innerHTML = data.name
        app_weather__description.innerHTML = data.weather[0].description
        app_weather__temp.innerHTML = `${temperature}<sup>o</sup>C`
        app_weather__detail_wind.innerHTML = `${data.wind.speed} km/h`
        app_weather__detail_humidity.innerHTML = `${data.main.humidity}%`
        app_weather__detail_visibility.innerHTML = `${visibility} m`
}