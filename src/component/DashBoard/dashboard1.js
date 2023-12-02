import "./dashboard.css"
import {  FormatToLocalTime } from "../../Service/WeatherFetch"


const showboard = ({ weather: {name, timezone, dt, country }}) => {
    return(
        <>
            
            <div className="CurrentTime">
                <h2 className="cityName">{name}, {country}</h2>
                <h1 className="cityTime">{FormatToLocalTime(dt, timezone, "hh:mm")}</h1>
                <h6 className="cityDate">{FormatToLocalTime(dt, timezone)}</h6>        
            </div>
                
        
        </>
    )
}

export default showboard;