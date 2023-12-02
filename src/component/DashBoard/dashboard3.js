import "./dashboard.css"
import {  iconURLFromCode } from "../../Service/WeatherFetch";



const showboard = ({Daily}) => {
    
    return(
        <>
            <div className="CurrentTemForcast">
                
                {Daily.map((item)=>(
                    <div className="temDayForcast">
                    <img src={iconURLFromCode(item.icon)} alt="sunny" />
                    <p>{item.temp.toFixed()}°C</p>
                    <p>{item.title}</p>
                </div>

                ))}
            
            </div>
                
                
            
        
        </>
    )
}

export default showboard;