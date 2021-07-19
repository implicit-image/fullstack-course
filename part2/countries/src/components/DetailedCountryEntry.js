import { React, useState, useEffect } from 'react'
import WeatherReport from './WeatherReport'
import axios from 'axios'


const DetailedCountryEntry = ({ country, api_key }) => {

  const [weather, setWeather] = useState({})

  const windDegreeToDirection = (degree) => {
    const dirs = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
    return(dirs[Math.floor((degree % 360)/22.5)+1])
  }

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`)
      .then(res => {
        setWeather({
          temp: res.data.main.temp,
          desc: res.data.weather[0].description,
          wind_speed: res.data.wind.speed,
          wind_dir: windDegreeToDirection(res.data.wind.deg),
          icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        })
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
        else if (error.request) {
          console.log(error.request)
        }
      })
  })

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(lang =>
          <li key={lang.nativeName}>{lang.name}</li>)
        }
      </ul>
      <img
        src={country.flag}
        alt={`flag of ${country.name}`}
        width="125"
        height="125"
      />
      <WeatherReport city={country.capital} weather={weather}/>
    </div>
  )
}

export default DetailedCountryEntry
