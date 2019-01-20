import React, { Component } from 'react'

class WeatherSearch extends Component {

  state = {
    value: ''
  }


  componentDidMount() {
    console.log('Weather Search')
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  // handleSubmit = (event) => {
  //   console.log(event.key)
  //   if (event.key === 13) {
  //     console.log('Enter Key pressed!')
  //     console.log(this.state.value)
  //   }
  //   event.preventDefault()
  //   // Call API here?
  // }

  handleKeyPress(event) {
    console.log(event.key)
    if (event.key === 'Enter') {
      console.log('Enter Key pressed!')
      // console.log(this.state.value)
      event.preventDefault()
    }

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.value}
        <input type="search"  placeholder="Austin, TX" style={inputStyle} onChange={this.handleChange} value={this.state.value} onKeyPress={this.handleKeyPress} />
      </form>
    )
  }
}

const inputStyle = {
  outline: 'none',
  borderRadius: '4px',
  width: '200px',
  height: '34px',
  margin: '10px 0 0 0',
  border: '0',
  fontSize: '22px'
}



export default WeatherSearch