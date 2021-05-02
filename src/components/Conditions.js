
import "../assets/App.css"
import React from 'react'
import { useState, useEffect } from "react"
import "../assets/App.css"
import Forecast from "./Forecast"

const conditions = (props) => {
    
    return (
 
        <div className="Result">
 
            {props.responseObj.cod === "200" ?
 
                <div>
 
                    <h1><strong>{props.responseObj.list[0].name}</strong></h1>
                    <img src={`http://openweathermap.org/img/wn/${props.responseObj.list[0].weather[0].icon}@2x.png`}></img>
                    <h2> {Math.round(props.responseObj.list[0].main.temp-273.15)}°C</h2>
 
                </div>
 
            : null
 
            }
 
        </div>
 
    )
 
 }
 
 

export default conditions;
