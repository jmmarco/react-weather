import React, { Component } from 'react'
import Header from './components/Header'
import * as API from './utils/api.js'
import './App.css'
import ForecastDetail from './components/ForecastDetail'
import DailyForecast from './components/DailyForecast'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  state = {
    results: '',
    wForecast: null,
    query: 'Austin',
    city: 'Austin',
    value: ''
  }

  componentDidMount() {
    API.getWeather('Austin')
      .then(results => {
        console.log(results.data.list)
        this.setState({
          wForecast: results.data.list
        })
      })
  }

  // Search Functions
  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleKeyPress(event) {
    console.log(event.key)
    if (event.key === 'Enter') {
      console.log('Enter Key pressed!')
      // console.log(this.state.value)
      event.preventDefault()
    }

  }



  render() {
    const { wForecast, query } = this.state
    return (
      <Router>
        <div className="App">
          <Header />
          <main>

            <h2 className="city">{query}</h2>

            <div className="weekly-forecast">

              <Route exact path="/" render={() => (
                wForecast ? wForecast.map(f => (
                  <Link to={`/details/${f.dt}`} key={f.dt}>
                    <DailyForecast forecast={f}/>
                  </Link>
                )) :

                <div>
                  Loading...
                </div>
                
                )}/>

            </div>

            {wForecast && (
              <Route path="/details/:dateTime" render={({ match }) => (
                  <ForecastDetail forecast={wForecast.find(f => f.dt === Number(match.params.dateTime))} />
              )}/>
            )}

          </main>
        </div>
      </Router>
    )
  }
}


// const ForecastDetail = (props) => {

//   const { forecast } = props
//   const { weather } = props.forecast

//   return (
//     <div className="forecast-detail" >

//       <p>{weather[0].main}</p>
//       <p>min temp: {forecast.temp.min}</p>
//       <p>max temp: {forecast.temp.max}</p>
//       <p>Humidity: {forecast.humidity}</p>
//     </div>
//   )
// }


export default App
