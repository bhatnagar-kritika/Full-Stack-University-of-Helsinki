import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {

  const [weather,setWeather] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  useEffect(()=>{
    if(capital) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`

      axios.get(weatherUrl)
        .then(response => {
          setWeather(response.data)
        })
        .catch(error => {
          console.log('error in weather data:',error)
        })
    }

  },[])

if(!weather) {
  return <div>Loading...</div>
}
  return(
    <div> 
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weather.main.temp}</p>
      <p>Weather: {weather.weather[0].description}</p>
      <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt={weather.weather[0].description} />
      
    </div>
  )
}

export default Weather