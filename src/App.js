import React, { Component } from 'react'
import Header from './components/Header'
import * as API from './utils/api.js'
import './App.css'
import ForecastDetail from './components/ForecastDetail'
import DailyForecast from './components/DailyForecast'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import WeatherSearch from './components/WeatherSearch';

class App extends Component {

  state = {
    cityInfo: {
      name: '',
      country: ''
    },
    wForecast: null,
    value: '',
    error: null,
    loading: false,
    unit: 'k'
  }

  componentDidCatch() {
    this.setState({
      error: true,
      errorMessage: 'something something'
    })
  }

  handleChange = (event) => {
    if (event.target.value.length === 0) {
      console.log('input is zero')
      this.setState({
        wForecast: null,
        error: false
      })
    }
    this.setState({ value: event.target.value })
  }

  convertTemp = () => {

  }


  handleTempChange = (unit) => {

  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Bam Key pressed!')
      // Clear previous weather results
      this.setState({
        wForecast: null,
        loading: true,
        error: false
      })
      API.getWeather(this.state.value)
        .then(results => {
          console.log(results)

            this.setState({
              wForecast: results.list,
              loading: false,
              cityInfo: {
                name: results.city.name,
                country: results.city.country
              }
            })

        })
        .catch(error => {
          this.setState({
            loading: false,
            error: 'Something went wrong, check input and try again.'
          })
        })
    }
  }

  render() {
    const { loading, error, value, wForecast, } = this.state

    if (wForecast) {

      wForecast.forEach(f => console.log(f))
      let found = wForecast.find(f => f.dt === 1550685600)
      console.log(found)
    }



    return (
      <Router>
        <div className="App">
          <Header value={value} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />
          <main>

            { error ? <p>{this.state.error}</p> :
              loading ? <p>Loading...</p> :
              
                wForecast ?
                  <section>
                    <h3>{this.state.cityInfo.name}, {this.state.cityInfo.country}</h3>
  
                    <div className="Forecast-box"> 
                      
                      {/* {wForecast.map(f => <span key={f.dt}>Temp: {f.temp.day} K</span>)} */}
                      {wForecast.map(f => <Link key={f.dt} to={`/forecast-detail/${f.dt}`}><DailyForecast forecast={f}/></Link>)}
                    </div>
                  </section>
                : 
                <Route exact path="/" render={() => (
                  <div>
                    <h2 className="App-Prompt">Enter City and State</h2>
                    <WeatherSearch value={value} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
                  </div>
                )}/>

            }

            {
              wForecast && (
                <Route exact path="/forecast-detail/:fId" render={({match}) => (
                        <ForecastDetail forecast={wForecast.find(f => f.dt === Number(match.params.fId) )}/>
               )}/>
              )
            }



            
          </main>
        </div>
      </Router>
    )
  }
}


export default App
