import React from 'react'
import { useState,useEffect } from "react"
import Conditions from "./Conditions.js"
import Navbar from "./navbar"
import "../assets/App.css"
import ErrorBoundary from "./Error"

const Forecast = () => {
    let[responseObj, setResponseObj] = useState({})
    let [city, setCity] = useState("")
    let [Error, setError] = useState(false)
    
   
    
    function getForecast() {
        fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8e8d9bafc2mshf5c21874e862fbep12c73cjsnaaac776688a7",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(response => {
	
    setResponseObj(response)
})
.catch(err => {
	console.error(err);
    setError(true)
    
});
    
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        
        <div className="Forecast">
             
            <Navbar responseObj={responseObj} />
            <div className="infoWeather">
                <h2>Find Current Weather Conditions</h2>
                <div className="bodyweather">
                
                <div  className="submitForecast">
                    <form onSubmit={handleSubmit}>
                        <label id="labelCity">City:</label><br></br>
                        <input type="text" required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}></input><br></br>
                        
                        <button onClick={getForecast}>Get Forecast</button>
                    </form>
                    <Conditions responseObj={responseObj}/>
                
                </div>
                
                </div>
                
                
           </div>
       </div>
    )

}



export default Forecast

