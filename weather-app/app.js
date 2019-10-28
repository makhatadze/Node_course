// const request = require('request')

// const url = 'https://api.darksky.net/forecast/907eccd180d51a69f13d804213877f8e/37.8267,-122.4233'

// request({ url: url, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(data.currently)
//     ////// same
//     //console.log(response.body.currently)
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a '
//      + response.body.currently.precipProbability + ' chance of rain')
// })


// // Geocoding 
// // Address -> Lat/Long -> Weather


// // const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoidml0bzAxIiwiYSI6ImNrMmE4cGx4ZTAxaHgzZnMza2ppdjdpYzMifQ.IjMiRDTzBJEby_HInaDI7A'
// // request({ url: geocodeURL, json: true }, () => (error, response) => {
// //     const latitude = response.body.features[0].center[0]
// //     const longitude = response.body.features[0].center[1]
// //     console.log(latitude, longitude)
// //     console.log('asdasd')

// // })

const request = require('request')

const url = 'https://api.darksky.net/forecast/907eccd180d51a69f13d804213877f8e/37.8267,-122.4233'


request({ url: url, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to wather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } 
    else {

    
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a '
     + response.body.currently.precipProbability + ' chance of rain')
    }
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoidml0bzAxIiwiYSI6ImNrMmE4cGx4ZTAxaHgzZnMza2ppdjdpYzMifQ.IjMiRDTzBJEby_HInaDI7A'

request ({ url: geocodeURL, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to geocode serice!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    }
    else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]

        console.log(latitude, longitude)
    }

})