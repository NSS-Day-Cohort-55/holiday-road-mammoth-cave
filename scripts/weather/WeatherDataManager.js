import { settings } from "../Settings.js"

const getApi = (lat, lon) => {
  `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${settings.weatherKey}`
}

let weatherApi = getApi()

export const getWeather = (lat, lon) => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${settings.weatherKey}`)
    .then(response => response.json())
}



export const showWeather = (lat, lon) => {
  const renderWeather = document.querySelector(".Weather_Page")
  getWeather(lat, lon)
    .then((weatherApi) => {
      renderWeather.innerHTML = `<section class= "Weather">
      <section class= "Weather_Card">
        <h2>Day 1<h2>
        <h3>Temperature: ${weatherApi.list[0].main.temp}</h3>
      </section>
      <section class= "Weather_Card">
        <h2>Day 2<h2>
        <h3>Temperature: ${weatherApi.list[1].main.temp}</h3>
      </section>
      <section class= "Weather_Card">
        <h2>Day 3<h2>
        <h3>Temperature: ${weatherApi.list[2].main.temp}</h3>
      </section>
      <section class= "Weather_Card">
        <h2>Day 4<h2>
        <h3>Temperature: ${weatherApi.list[3].main.temp}</h3>
      </section>
      <section class= "Weather_Card">
        <h2>Day 5<h2>
        <h3>Temperature: ${weatherApi.list[4].main.temp}</h3>
      </section>
      </section>`
     })
 }