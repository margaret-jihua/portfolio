import React, {useState} from 'react'
import axios from 'axios'

import WeatherResult from './WeatherResult'

export default function Weather () {
    const [zip, setZip] = useState('')
    const [weather,setWeather] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        let url = 'http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98'
        axios.get(url)
        .then(res => {
            setWeather(res.data)
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Find Weather in your Area ⛅️</h1>
            {weather ? <WeatherResult weather={weather}/> : null}
            <h5>Enter your zipcode to find current weather in your area!</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="zip">Zipcode: </label>
                <input type="text" id="zip" onChange={e => setZip(e.target.value)} />
                <input type="submit" value="Find Weather" />
            </form>
        </div>
    )
}