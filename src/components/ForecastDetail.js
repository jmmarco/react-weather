import React from 'react'
import DailyForecast from './DailyForecast'

const ForecastDetail = (props) => {

  console.log(props)
  const { forecast } = props
  const { weather } = props.forecast

  return (
    <div className="forecast-detail" >
      <DailyForecast forecast={forecast}/>
      <p>{weather[0].main}</p>
      <p>min temp: {forecast.temp.min}</p>
      <p>max temp: {forecast.temp.max}</p>
      <p>Humidity: {forecast.humidity}</p>
    </div>
  )
}

export default ForecastDetail