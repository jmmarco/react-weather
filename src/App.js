import React, { Component } from 'react'
import Header from './components/Header'
import * as API from './utils/api.js'
import './App.css'
import WeatherIcon from 'react-icons-weather'

class App extends Component {

  state = {
    results: '',
    forecast: []
  }

  componentDidMount() {
    console.log('componentDidMount Loaded')
    API.getWeather('Austin')
      .then(results => {
        console.log(results.data.list)
        this.setState({
          forecast: results.data.list
        })
      })
  }


  render() {
    const { forecast } = this.state

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return (
      <div className="App">
        <Header />
        <main>
          {/* {JSON.stringify(this.state.forecast)} */}
          {forecast.map(f => {
            const dailyForecast = f.weather[0]
            {/* const day = days[] */}
            console.log(f)
            console.log(f.dt)
            const day = days[ new Date(f.dt * 1000).getDay() ] 
            console.log(day)
            return (
              <div key={f.dt}>
                <WeatherIcon name="owm" iconId={dailyForecast.id.toString()} />
              </div>
            )
          })}
        </main>
      </div>
    );
  }
}


export default App
