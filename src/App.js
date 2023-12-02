import './App.css';
import SearchBar from './component/search_bar/serach_bar.js';
import Showboard1 from './component/DashBoard/dashboard1.js';
import Showboard2 from './component/DashBoard/dashboard2.js';
import Showboard3 from './component/DashBoard/dashboard3.js';
import Showboard4 from './component/DashBoard/dashboard4.js';
import Footer from './component/footer/footer.js';
import img from './image/Cloudy.jpg'
import getFormattedWeatherData from './Service/WeatherFetch.js';
import { useEffect, useState } from 'react';



function App() {

  const [query, setQuery] = useState({ q:'chennai' })
  const [weather, setWeather] = useState(null)
  const units = "metric"
  useEffect(()=>{
    const FetchData = async () => {
    await getFormattedWeatherData({...query, units}).then(data=>{
    setWeather(data)
    
    
    })
    
  }
   FetchData() 
  }, [query, units])


  return (
    <>
    <div className="container">
      <img className="Background-image" src= {img}  alt="Cloudy" />
      <SearchBar setQuery = {setQuery} />
      {weather && (
        <div className='dashboard'>
        <Showboard1 weather={weather} />
        <Showboard2 weather={weather} />
        <Showboard3 Daily={weather.daily} />
        <Showboard4 Hourly={weather.hourly} />
        </div>
      )}
      
      
      <Footer />
    </div>
    </>
  );
}

export default App;
