import React, { useState, useEffect, useRef } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {



  const [alert, setAlert] = useState(false);


  const color = rgb.join(",");
  console.log(color);
  


  return <>
  <div style={{background:`rgb(${color})`} } className={`color ${index>10 && "color-light"}`} onClick={(e)=>{
    setAlert(true);
    navigator.clipboard.writeText(rgbToHex(...rgb));
  
    console.log(alert);
    setTimeout(()=>{setAlert(false)}, 500)
  }}>

      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{rgbToHex(...rgb)}</p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
  </div>
      

      
  </> 
}

export default SingleColor
