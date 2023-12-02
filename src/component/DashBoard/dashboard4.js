import "./dashboard.css"
import { iconURLFromCode } from "../../Service/WeatherFetch";



const showboard = ({Hourly}) => {
    console.log(Hourly)
    return(
        <>
            
            <div className="CurrentTemHourly">
                <div>
                    <p className="hourlyHeader">Hourly Forecast</p>
                </div>
                <hr />
                <div className="HourlyTem">
                {Hourly.map((item)=>(
                    <div className="ForecasteDiv">
                    <p>{item.title}</p>
                    <img src={iconURLFromCode(item.icon)} alt="Climate" />
                    <p>{item.temp.toFixed()}°C</p>
                </div>
                ))}
                </div>
            </div>
                
            
        
        </>
    )
}

export default showboard;