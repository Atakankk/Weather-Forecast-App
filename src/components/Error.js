import "../assets/App.css"
import React from 'react'
import { useState, useEffect } from "react"

import Forecast from "./Forecast"

const error = (props) => {
return(
  <div>{props.Error}</div>
)
}

