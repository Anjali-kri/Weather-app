// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({
        City:"",
        temp: "",
        minTemp: "",
        maxTemp: "",
        feels_like: "",
        humidity: "",
        pressure: "",
        Weather: "",
    });

    const handleWeather = (data) => {
        setWeatherData(data);
    }
  return (
    <>
        <h1 className='text-4xl text-gray-900'>weather App</h1>
        <div className='max-w-md mx-auto'>
        <SearchBox setdatatoParent={handleWeather}/>
        <InfoBox weatherData={weatherData}/>
        </div>
        
        
    </>
  )
}

export default Weather