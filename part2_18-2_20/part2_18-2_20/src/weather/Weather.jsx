import { useState, useEffect } from "react"
import WeatherService from "./service"

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const weatherImageBaseUrl = "https://openweathermap.org/img/wn/"
    console.log("Capital: ", capital)

    useEffect(
        () => {
            WeatherService.getWeather(capital)
            .then(reponse => {setWeather(reponse.data)})
        }, [capital]
    )

    console.log(weather)

    if (!weather) {
        return (<div>Loading weather...</div>)
    }

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <h4>{weather.weather[0].main}</h4>
            {weather.weather[0].description}<br/>
            <img src={
                `${weatherImageBaseUrl}${weather.weather[0].icon}@2x.png`
                }
                alt={`${weather.weather[0].description} icon`}/>
        </div>
    )
}

export default { Weather }