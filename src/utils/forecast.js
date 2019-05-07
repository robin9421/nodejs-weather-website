const request = require('request');

const forecast = (lat, log, callback) => {
    const url = 'https://api.darksky.net/forecast/91abaf8540bed50a10a1483bcdc81980/'+lat+','+log;

    request({ url:url, json:true}, (error,{body})=>{      
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error) {
            callback('Unable to find the location. Try another search', undefined);
        }else {
            callback(undefined,body.daily.data[0].summary+ ' It is currently '+body.currently.temperature+' degrees out. There is  a '+body.currently.precipIntensity+'% chance of rain')
        }
    })
}

module.exports = forecast