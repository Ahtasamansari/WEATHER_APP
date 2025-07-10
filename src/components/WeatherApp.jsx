import React, { useState } from 'react'
import SearchBoxBtn from './SearchBoxBtn';
import  {InfoBox}  from './InfoBox'

const weatherApp = () => {
const[weatherInfo, setWeatherInfo]=useState({
    city: "",
    feels_like: 303.54,
    humidity: 58,
    temp: 301.93,
    temp_max: 301.93,
    temp_min: 301.52,
    weather: "overcast clouds"
  })

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo)
  }
  return (
    <div style={{textAlign:"center"}}>
     <h1>Weather App</h1>
      
      <SearchBoxBtn   updateInfo={updateInfo} />
    <InfoBox  Info={weatherInfo}/>
    </div>
  )
}

export default weatherApp
