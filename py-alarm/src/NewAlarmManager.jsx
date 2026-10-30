import { useState } from 'react'
import TimeInputContainer from './components/TimeInputContainer'
import ClearInputBtn from './components/ClearInputBtn'
import AlarmsContainer from './components/AlarmsContainer'
import BtnContainer from './components/BtnContainer'
import TriggeredAlarm from './components/TriggeredAlarm'
import useAlarmTracker from './utils/useAlarmTracker'
import { formattedTimeInputs } from './utils/alarmMethods'
import './styles/AlarmManager.css'

function NewAlarmManager() {
  
  // handling time inputs for TimeInputContainer
  const [hourVal, updateHourVal] = useState('')
  const [minuteVal, updateMinuteVal] = useState('')
  const [secondsVal, updateSecondsVal] = useState('')
  
  // handling btn rendering
  const [btnState, setBtnState] = useState('NO-ALARM')
  
  // handling alarms 
  const [alarmList, updateAlarmList] = useState([])
  
  // toggle main time input container visibility for modify alarm time input container
  const [showTimeInput, toggleTimeInput] = useState(true)
  
  // toggle trigger time display
  const [showTrigger, toggleTriggerDisplay] = useState(false)
  
  // func to track alarm times
  useAlarmTracker(alarmList, toggleTriggerDisplay)
  
  return (
    <>
      
      { 
        showTimeInput ? (
          <TimeInputContainer 
            setSecondsVal={updateSecondsVal}
            setMinutesVal={updateMinuteVal}
            setHourVal={updateHourVal}
            secondsVal={secondsVal}
            minuteVal={minuteVal}
            hourVal={hourVal}
          />
        ) : (
          <></>
        )
      }
      
      
      <ClearInputBtn
        secInputFunc={updateSecondsVal}
        minInputFunc={updateMinuteVal}
        hrInputFunc={updateHourVal}
      />
      
      <BtnContainer 
        btnState={btnState}
        btnConfigs={{
          alarmList,
          updateAlarmList,
          secondsVal,
          minuteVal,
          hourVal,
          setBtnState,
          setSecondsVal: updateSecondsVal,
          setMinutesVal: updateMinuteVal,
          setHourVal: updateHourVal,
          toggleTimeInput
        }}
        updateBtnState={setBtnState}
        
      />
      
      <AlarmsContainer 
        alarmsList={alarmList} 
        btnState={btnState}
        updateBtnState={setBtnState}
      />
      
      {
        showTrigger ? (
          <TriggeredAlarm 
            targetAlarmTime={formattedTimeInputs(secondsVal, minuteVal, hourVal)}
            showDisplay={toggleTriggerDisplay}
          />
        ) : (
          <></>
        )
        
      }
      
    </>
  )
  
}

export default NewAlarmManager