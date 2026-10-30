import { useState } from 'react'
import { 
  modifyAlarm, 
  handleInput, 
  formattedTimeInputs
} from './../utils/alarmMethods'
import TimeInputContainer from './TimeInputContainer'
import './../styles/BtnStyles.css'

function ModifyAlarmBtn({
  alarmList,
  updateAlarmList,
  setTimeInputVisibility
}) {
  
  // modify button display text state change 
  const [modifyBtnText, setBtnText] = useState('Modify Alarm')
  
  // input bar to select index to modify
  const [inputVal, setInputVal] = useState('')
  const [showInput, toggleInputDisplay] = useState(false)
  
  // separate time input container to update val 
  const [modifySec, setModifySec] = useState('')
  const [modifyMin, setModifyMin] = useState('')
  const [modifyHr, setModifyHr] = useState('')
  const [showTimeInput, toggleTimeInput] = useState(false)
  
  // thinking of a 3-step process
  /**
   * no input elem & time input visible 
   * only input elem visible
   * both visible
   * back to original state 
   */
   
  let maxVal = alarmList.length
   
  return (
    
    <>
      
      <button
        className={'modify-btn'}
        onClick={()=>{
          // show input to select index 
          if(!showInput) {
            toggleInputDisplay(true)
            setBtnText('Index Selected?')
          }
          
          // show time input & remove other one from display 
          if(!showTimeInput && showInput) {
            setTimeInputVisibility(false)
            toggleTimeInput(true)
            setBtnText('Save Changes')
          }
          
          // update alarm list and resort back to original state 
          if(showInput && showTimeInput) {
            modifyAlarm(
              parseInt(inputVal)-1,
              formattedTimeInputs(modifySec,modifyMin,modifyHr),
              alarmList,
              updateAlarmList
            )
            setTimeInputVisibility(true)
            toggleInputDisplay(false)
            toggleTimeInput(false)
            setBtnText('Modify Alarm')
            setInputVal('')// clear input if done 
            setModifySec('')
            setModifyMin('')
            setModifyHr('')
          }
          
        }}
      >
        {modifyBtnText}
      </button>
      
      {/* input elem visiblity check */}
      {
        showInput ? (
          
          <input
            type={'number'}
            value={inputVal}
            className={'modify-input'}
            max={2}
            maxLength={2}
            placeholder={`Index: 1-${maxVal}`}
            onChange={(e)=>{
              handleInput(e.target.value,maxVal,setInputVal)
            }}
          />
          
        ) : (
          <></>
        )
      }
      
      {/* time input visiblity check */}
      {
        showTimeInput ? (
          
          <TimeInputContainer 
            setSecondsVal={setModifySec}
            setMinutesVal={setModifyMin}
            setHourVal={setModifyHr}
            secondsVal={modifySec}
            minuteVal={modifyMin}
            hourVal={modifyHr}
          />
          
        ) : (
          <></>
        )
      }
      
    </>
    
  )
  
}

export default ModifyAlarmBtn