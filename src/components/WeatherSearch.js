import React from 'react'

const WeatherSearch = (props) => {

  return (
    <input
      type="search"
      placeholder="Austin, TX" 
      style={inputStyle} 
      onChange={props.handleChange} 
      value={props.value} 
      onKeyPress={props.handleKeyPress} 
    />
  )
}


const inputStyle = {
  outline: 'none',
  fontWeight: '150',
  borderRadius: '4px',
  width: '200px',
  height: '44px',
  margin: '10px 0 0 0',
  border: '0',
  fontSize: '22px',
  padding: '16px 12px',
  lineHeight: '1.42857143'
}



export default WeatherSearch