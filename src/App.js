import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import ForecastDetail from './components/ForecastDetail'
import * as API from './utils/api.js'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WeatherSearch from './components/WeatherSearch';

class App extends Component {

  state = {
    cityInfo: null,
    wForecast: null,
    value: '',
    error: null,
    loading: false,
    unit: 'k'
  }


  clearInput = () => {
    this.setState({
      wForecast: null,
      error: false,
      cityInfo: null,
      value: ''
    })
  }

  handleClick = () => {
    this.clearInput()
  }

  handleChange = (event) => {
    if (event.target.value.length === 0) {
      console.log('input is zero')
      this.clearInput()
    }
    this.setState({ value: event.target.value })
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

    const { wForecast, cityInfo } = this.state

    return (
      <Router>
        <div className="App">

          <Route exact path="/" render={() => (
            <div>
              <Header value={this.state.value} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />

              {!cityInfo ?  (<WeatherSearch handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} /> ) :

              <h3 className="city-name">{cityInfo.name}, {cityInfo.country} <div className="clear-query"><span onClick={this.handleClick}>X</span></div></h3>
              
               }
              
              { wForecast && <Main wForecast={this.state.wForecast} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} /> }
            </div>
          )} />

          { wForecast && <Route path="/forecast-detail/:dateTime" render={({match}) => (
            <ForecastDetail forecast={wForecast.find(f => f.dt === Number(match.params.dateTime)) }/>
          )}

          />}
          
        </div>
      </Router>
    )
  }
}


export default App
