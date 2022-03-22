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
  const renderWeather = document.querySelector(".Weather")
  getWeather(lat, lon)
    .then((weatherApi) => {
      renderWeather.innerHTML = ` <section>
      ${weatherApi.list?.map((dataObj)=>`<h1> ${dataObj.main.temp}</h1>`)}
      </section>`
     })
 }