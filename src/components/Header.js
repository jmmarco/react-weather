import React from 'react'
import WeatherSearch from './WeatherSearch'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { value, handleChange, handleKeyPress } = props
  return (
    <header className="App-header">
      <h1><Link to="/">Clever Title</Link></h1>
      <WeatherSearch value={value} handleChange={handleChange} handleKeyPress={handleKeyPress}  />
    </header>
  )
}


export default Header