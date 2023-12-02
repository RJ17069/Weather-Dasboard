import "./dashboard.css"
import Humidity from "../../image/Humidity.png"
import Pressure from "../../image/Pressure.png"
import Windy from "../../image/Windy.png"
import UV from "../../image/UV.png"
import { FormatToLocalTime, iconURLFromCode } from "../../Service/WeatherFetch";



const showboard = ({ weather: {temp, pressure, speed, humidity, icon, feels_like, details, sunrise, sunset, timezone }}) => {
    
    return(
        <>
            <div className="CurrentTem">
                <div className="CurrentTemDiv1">
                    <h1 className="cityTime">{temp.toFixed()}°C</h1>
                    <h6 className="cityDate">Feels Like: {feels_like.toFixed()}°C</h6>
                    <div className="sunraise">
                        <p>Sunrise:</p>
                        <p>{FormatToLocalTime(sunrise, timezone, "hh:mma")}</p>
                        <p>Sunset:</p>
                        <p>{FormatToLocalTime(sunset, timezone, "hh:mma")}</p>
                    </div>
                </div>
                <div className="CurrentTemImg">
                    <img src={iconURLFromCode(icon)} alt="sunny" />
                    <p>{details}</p>
                    
                </div>
                <div className="CurrentTemStat">
                    
                        <div className="CurrentTemStatDiv1">
                            <img src={Humidity} alt="sunny" />
                            <p>Humidity: {humidity}%</p>
                        </div>
                        <div className="CurrentTemStatDiv1">
                            <img src={Windy} alt="sunny" />
                            <p>Wind Speed: {speed}km/h</p>
                        </div>
                        <div className="CurrentTemStatDiv1">
                            <img src={Pressure} alt="sunny" />
                            <p>Pressure: {pressure}Pa</p>
                        </div>
                        <div className="CurrentTemStatDiv1">
                            <img src={UV} alt="sunny" />
                            <p>UV: 1mW/cm2</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default showboard;