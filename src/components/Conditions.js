
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
 
                    <h2><strong>{props.responseObj.list[0].name}</strong></h2>
 
                    <p>It is currently {Math.round(props.responseObj.list[0].main.temp-273.15)} degrees out with {props.responseObj.list[0].weather[0].description}.</p>
 
                </div>
 
            : null
 
            }
 
        </div>
 
    )
 
 }
 
 

export default conditions;
