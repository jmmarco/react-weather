const axios = require('axios')
// const KEY = `17bf252c44d2fcc3aa20967c00704ada`
// const URL = `https://api.openweathermap.org/data/2.5/`


// Tyler's URL: ${URL}/forecast/daily?q=${query}&type=accurate&APPID=${KEY}
// https://api.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22

export function getWeather(query) {
  // return fetch(`${URL}/forecast/daily?q=${query}&type=accurate&APPID=${KEY}`)
  //   .then(results => {
  //     console.log(results)
  //     return results
  //   })


  // https://api.openweathermap.org/data/2.5/forecast/daily?q=Austin&appid=17bf252c44d2fcc3aa20967c00704ada
  // https://api.openweathermap.org/data/2.5/forecast/daily?q=Austin&appid=17bf252c44d2fcc3aa20967c00704ada

  // return axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Austin&appid=17bf252c44d2fcc3aa20967c00704ada`)
  //   .then(results => {
  //     return results
  //   })

  console.log(`Query is ${query}`)

  return axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&appid=17bf252c44d2fcc3aa20967c00704ada`)
  .then(response => {
    return response.data

  })
  .catch(error => {
    console.warn(error)
    return error
  })
}


// export function getWeather(query) {

//   console.log(`Query is ${query}`)

//   return fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&appid=17bf252c44d2fcc3aa20967c00704ada`)
//   .then(response => {
//     console.log(response)
//     if (response.ok) {
//       return response.json()
//     } else {
//       console.log('inside else')
//       console.log(response.json())
//       return response.json().message
//       // return response.json().statusText
//     }

//   })
//   .catch(error => {
//     console.warn(error)
//     return null
//   })
// }