import { useEffect, useRef } from 'react'
import './../styles/AlarmManager.css'

// thinking of adding a structure where this component is linked to the index of the target alarm 

function TriggeredAlarm({
  alarmList,
  targetAlarmIndex, 
  showDisplay
}) {
  
  // retrieve alarm list for tracking
  const currentAlarmList = useRef(alarmList)
  
  // automatically delete notification
  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      showDisplay(false)
    },60000)
    
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