import { useEffect } from 'react'
import { formatter } from './dateObjectFormatter'

const useAlarmTracker = (
  alarmList, 
  triggerFunc// deprecated for now
) => {
  
  useEffect(()=>{
    
    const tracker = setInterval(()=>{
      if(alarmList.length > 0) {
        for(let i=0; i<alarmList.length; i++) {
          const alarmTime = alarmList[i].time
          const dTime = formatter.format(new Date())
          if(alarmTime === dTime) {
            alert(`Alarm at ${alarmTime} has been reached`)
          }
        }
      }
      
    },1000)
    
    return () => clearInterval(tracker)
    
  },[alarmList])
  
} 

export default useAlarmTracker