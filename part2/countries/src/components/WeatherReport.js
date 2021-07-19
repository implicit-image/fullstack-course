import React from 'react'



const WeatherReport = ({ city, weather }) => {

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p><b>temperature:</b> {weather.temp}</p>
      <img src={weather.icon} alt={weather.desc}/>
    <p><b>wind:</b> {weather.wind_speed} kph direction {weather.wind_dir}</p>
    </div>
  )
}


export default WeatherReport
