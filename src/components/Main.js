import React from 'react'
import DailyForecast from '../components/DailyForecast'
import WeatherSearch from '../components/WeatherSearch'
import WeeklyForecast from './WeeklyForecast';

const Main = (props) => {

  console.log(props)

  return (
    <main>
      {/* {props.wForecast
        ? props.wForecast.map(f => <DailyForecast key={f.dt} forecast={f} />)
        : <WeatherSearch handleChange={props.handleChange} handleKeyPress={props.handleKeyPress} />
      } */}
      <WeeklyForecast wForecast={props.wForecast} />
    </main>
  )
}

export default Main
