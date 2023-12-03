import { DateTime } from "luxon"

const API_KEY = ""
const BASE_URL = "https://api.openweathermap.org/data/2.5"


const getWeatherInfo = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType );
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
    return fetch(url).then((res) => res.json()).then((data) => data)
}

const formatWeatherData = (data) =>{
    
    const {
        coord: {lon, lat},
        main: {temp,pressure,feels_like, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data
    const {main: details, icon} = weather[0]

    return {lat, lon, temp,pressure,feels_like,sunrise, sunset, humidity, name, dt, country, speed, details, icon}
}

const formatHourlyWeatherData = (data) =>{
    
    let { timezone, daily, hourly } = data

    daily = daily.slice(1,6).map(d =>{
        return {
            title: FormatToLocalTime(d.dt, timezone, 'cccc, dd LLL yyyy'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
        
    })
    hourly = hourly.slice(1,6).map(d =>{
        return {
            title: FormatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
        
    })
    return{ daily, hourly, timezone}
}


const getFormattedWeatherData = async (searchParams) =>{
    const FormattedWeatherData = await getWeatherInfo('weather', searchParams).then(formatWeatherData)

    const { lat, lon } = FormattedWeatherData
    
    const FormattedHourlyWeatherData = await getWeatherInfo('onecall', { lat, lon, exclude: "current,minutely,alerts", units: searchParams.units, }).then(formatHourlyWeatherData)
    
    return { ...FormattedWeatherData, ...FormattedHourlyWeatherData }
}

const FormatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



const iconURLFromCode = (code) =>{
    const URL = `http://openweathermap.org/img/wn/${code}@2x.png`;
    return URL
}

export default getFormattedWeatherData
export { FormatToLocalTime , iconURLFromCode }
