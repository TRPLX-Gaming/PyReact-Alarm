import {useState, useEffect} from 'react'
import { formatter } from './../utils/dateObjectFormatter'
import './../styles/DisplayTime.css'

function DisplayTime() {
  
  const initTime = formatter.format(new Date())
  const [currentTime, updateTime] = useState(initTime)
  
  useEffect(()=>{
    
    const intervalId = setInterval(()=>{
      const temp = new Date()
      updateTime(formatter.format(temp))
    },1000)
    
    return () => clearInterval(intervalId)
  },[])
  
  // resulting ui
  return (
    
    <div className={'div'}>
      <h1 className={'time'}>
        {currentTime}
      </h1>
    </div>
    
  )
  
}

export default DisplayTime