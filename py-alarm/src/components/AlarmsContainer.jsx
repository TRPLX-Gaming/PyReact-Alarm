import { useEffect, useRef } from 'react'


function AlarmsContainer({
  alarmsList,
  btnState,
  updateBtnState
}) {
  
  // keep track of alarm list 
  const currentAlarmList = useRef(alarmsList)
  
  // update reference to alarmsList
  useEffect(()=>{
    currentAlarmList.current = alarmsList
  },[alarmsList])
  
  useEffect(()=>{
    // to check btn state 
    const checker = setInterval(()=>{
      if(currentAlarmList.current.length <= 0) {
        updateBtnState('NO-ALARM')
        console.log(currentAlarmList.current.length)
      }
      //console.log(currentAlarmList.current.length,'gg')
    },1000)
    
    return () => clearInterval(checker)
    
  },[])
  
  return (
    
    // render alarms 
    
    alarmsList.map((alarm,index) => (
      <h1 key={`${index}`}
        style={{marginTop:'15px'}}
      >
        {index + 1}. Alarm set for --&gt; {alarm.time}
      </h1> 
    ))
    
  )
  
}

export default AlarmsContainer