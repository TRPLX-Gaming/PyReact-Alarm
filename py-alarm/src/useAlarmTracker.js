import { useEffect } from 'react'
import { formatter } from './DisplayTime'

const useAlarmTracker = (alarmList, triggerFunc) => {
  
  useEffect(()=>{
    
    const tracker = setInterval(()=>{
      const alarmTime = alarmList[0]?.time
      const dTime = formatter.format(new Date())
      if(alarmTime === dTime) {
        triggerFunc(true)
      }
    },1000)
    
    return () => clearInterval(tracker)
    
  },[alarmList,triggerFunc])
  
} 

export default useAlarmTracker