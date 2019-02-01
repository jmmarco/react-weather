import React from 'react'
import WeatherSearch from './WeatherSearch'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Header = (props) => {
  const { value, handleChange } = props
  return (
    <header className="App-header">
      <h1><Link to="/">Clever Title</Link></h1>
      <WeatherSearch value={value} handleChange={handleChange}  />
    </header>
  )
}


export default Header