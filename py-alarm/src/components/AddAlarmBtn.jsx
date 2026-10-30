import { useState } from 'react'
import {
  addAlarm,
  clearTimeInputs
} from './../utils/alarmMethods'
import './../styles/AlarmManager.css'

// when passing props(useState init vals & update funcs) always destructure by wrapping it all in curly braces

function AddAlarmBtn({
  alarmList,
  updateAlarmFunc,
  secondsVal,
  minutesVal,
  hourVal,
  setSecondsVal,
  setMinutesVal,
  setHourVal,
  setAlarmBtnPhase
}) {
  
  const [alarmBtnText, setAlarmBtnText] = useState('New Alarm')
  
  return (
    
    <button className={'alarm-btn'}
      onClick={()=>{
        //console.log('alarm adding btn works')
        setAlarmBtnPhase('ALARM-SET') // still working on btn state mgt 
        
        addAlarm(
          alarmList,
          updateAlarmFunc,
          secondsVal,
          minutesVal,
          hourVal
        )
        
        // disabled to test out alarm trigger text, might lead to manual clearing of input
        // clearTimeInputs(
        //   setSecondsVal,
        //   setMinutesVal,
        //   setHourVal
        // )
        
        // console.log(alarmList)
        
        setAlarmBtnText('Add Alarm')
      }}
    >
      {alarmBtnText}
    </button>
    
  )
  
}

export default AddAlarmBtn