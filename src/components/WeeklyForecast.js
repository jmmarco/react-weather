import React from 'react'
import { Link } from 'react-router-dom'
import DailyForecast from '../components/DailyForecast'

const WeeklyForecast = (props) => {

  const { wForecast } = props

  return (
    <div className="Forecast-box">
      {/* <h3>{props.cityInfo.name}, {props.cityInfo.country}</h3> */}
      {wForecast.map(f =>
        <Link key={f.dt} to={`/forecast-detail/${f.dt}`}>
          <DailyForecast forecast={f} />
        </Link>)
      }
    </div>
  )

}

export default WeeklyForecast