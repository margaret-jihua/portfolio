import React from 'react'

// (0K -273.15)* 9/5 + 32
export default function WeatherResult (props) {
    return (
        <div>
            <h4>Weather for {props.weather.name}</h4>
            <h6>Currently: {props.weather.main.temp} </h6>
            <h6>Currently in F : {(props.weather.main.temp-273.15)* 9/5 + 32} </h6>
            <h6>Currently in C : {props.weather.main.temp-273.15}</h6>
            <h6>High: {props.weather.main.temp_max} </h6>
            <h6>Low: {props.weather.main.temp_min} </h6>
        </div>
    )
}