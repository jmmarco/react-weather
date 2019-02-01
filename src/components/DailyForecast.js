import React from 'react'
import WeatherIcon from 'react-icons-weather'

const DailyForecast = (props) => {

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const { forecast } = props
  const { weather } = forecast

  const day = days[ new Date(forecast.dt * 1000).getDay() ]
  const month =  months[ new Date(forecast.dt * 1000).getMonth()]
  const date = new Date(forecast.dt * 1000).getDate()


  return (
    <div className="daily-forecast" key={forecast.dt}>
      <WeatherIcon name="owm" iconId={weather[0].id.toString()} />
      <p>{day}, {month} {date}</p>
    </div>
  )
}

export default DailyForecast

