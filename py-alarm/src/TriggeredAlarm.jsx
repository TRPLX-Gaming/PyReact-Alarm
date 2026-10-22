import { useState, useEffect } from 'react'
import './AlarmManager.css'

function TriggeredAlarm({targetAlarmTime, showDisplay}) {
  
  // automatically delete notification
  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      showDisplay(false)
    },5000)
    
    return () => clearTimeout(timer)
  },[])
  
  return (
    <>
      <div className={'center'}>
        <h1 style={{
          textAlign:'center'
        }}>
          Alarm for {targetAlarmTime} has been triggered!
        </h1>
      </div>
      
      <button 
        className={'alarm-btn'}
        style={{
          display: 'block',
          position: 'block',
          margin: '4px',
          fontSize: '30px',
          color:'red',
          borderColor: 'red'
        }}
        onClick={() => showDisplay(false)}
      >
        X
      </button>
      
    </>
  )
  
}

export default TriggeredAlarm