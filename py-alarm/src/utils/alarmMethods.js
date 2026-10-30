// bunch of utility methods for alarms bundled together 

// check if time inputs are empty 
export const formattedTimeInputs = (
  secondsVal,
  minuteVal,
  hourVal
) => {
  let [sec, min, hr] = [secondsVal, minuteVal, hourVal]
  
  // handling single digit inputs
  let finSec = sec.length < 1 ? '00' : sec.length === 1 ? `0${sec}` : sec
  let finMin = min.length < 1 ? '00' : min.length === 1 ? `0${min}` : min
  let finHr = hourVal.length < 1 ? '00' : hr.length === 1 ? `0${hr}` : hr
  
  return `${finHr}:${finMin}:${finSec}`
}


// add new alarm to alarm list after formatting
export const addAlarm = (
  currentAlarmList,
  updateAlarmList,
  secondsVal,
  minutesVal,
  hourVal
) => {
    const newAlarm = {
      time: `${formattedTimeInputs(
          secondsVal,
          minutesVal,
          hourVal
        )}`
    }
    
    const allAlarms = [...currentAlarmList,newAlarm]
    
    console.log('alarms: ',allAlarms)
    
    updateAlarmList(allAlarms)
  }

// proper handling of input elems for time 
export const handleTimeInput = (
  timeVal,
  maxInputLength,
  maxTimeVal,
  updateTimeVal
) => {
  const cleaned = timeVal.replace('/\D/g','')
  const numTimeVal = parseInt(cleaned) 
  if (cleaned.length <= maxInputLength && numTimeVal <= maxTimeVal) updateTimeVal(cleaned)
}

// util func to clear time inputs for specific events (clear btn & alarm adding)
export const clearTimeInputs = (
  setSecondsInput,
  setMinutesInput,
  setHourInput
) => {
  setSecondsInput('')
  setMinutesInput('')
  setHourInput('')
}

// removes an alarm via its index 
export const deleteAlarm = (
  targetIndex,
  currentAlarmList,
  updateAlarmList
) => {
  const modifiedList = currentAlarmList.filter((alarm,index) => (index !== targetIndex))
  // gets remaining elements except one for deletion
  updateAlarmList(modifiedList)
}

// edit an alarm
export const modifyAlarm = (
  targetIndex,
  newTimeString,
  currentAlarmList,
  updateAlarmList
) => {
  console.log('modify')
  
  const modifiedList = currentAlarmList.map((alarm,index) => {
    if(index === targetIndex) {
      alarm.time = newTimeString
      return alarm
    }
    return alarm 
  })
  console.log(modifiedList,'index: ',targetIndex)
  // update alarm list state 
  updateAlarmList(modifiedList)
  
}

// handle normal numeric inputs 
export const handleInput = (value, maxValue, setValueFunc) => {
  const numVal = parseInt(value.replace('/\D/g',''))
  if(numVal <= maxValue || numVal === 0) setValueFunc(numVal)
}