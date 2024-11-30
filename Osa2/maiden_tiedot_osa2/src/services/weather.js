import axios from "axios"
const api_key = import.meta.env.VITE_API_KEY
const baseURL = "https://api.openweathermap.org/data/2.5/weather?"

const getWeather = (lat, lon) => {
    const request = axios.get(`${baseURL}lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
    return request.then(response => {
        return response.data
    })
}

export default { getWeather } 