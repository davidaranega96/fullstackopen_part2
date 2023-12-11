import axios from "axios"
const API_KEY = import.meta.env.VITE_WEATHER_KEY
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const getWeather = (city) => {
    console.log("The key is: ", API_KEY)
    console.log(city)
    return axios.get(
        `${baseUrl}?q=${city}&appid=${API_KEY}`
        )
}

export default { getWeather }