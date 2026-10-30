import { useState } from 'react'
import { deleteAlarm, handleInput } from './../utils/alarmMethods'
import './../styles/BtnStyles.css'

function DeleteAlarmBtn({
  alarmList,
  updateAlarmList,
  setBtnState
}) {
  
  const [showInput, toggleInput] = useState(false)
  const [inputVal, setInputVal] = useState('')
  
  let maxNum = alarmList.length
  
  return (
   <>
      <button
        className={'delete-btn'}
        onClick={()=>{
          // check if no alarms left
          if(alarmList.length <= 0) {
            setBtnState('NO-ALARM')
            return
          }
        
          if(!showInput) {
            if(!inputVal) alert('select the index of the alarm to be removed')
          
            toggleInput(true) // to pop out the input bar 
          }
          
          // for when index has been inputted
          if(showInput) {
            toggleInput(false)
            deleteAlarm(inputVal-1,alarmList,updateAlarmList)
            setInputVal('')
            console.log('delete: ',alarmList)
          }
        }}
      >
        Delete Alarm
      </button>
    
      {/* rendering input bar */}
      
      {
        showInput ? (
          <input
            className={'delete-input'}
            type={'number'}
            value={inputVal}
            placeholder={`Index: 1-${maxNum}`}
            maxLength={2}
            max={2}
            onChange={(e)=>{
              handleInput(e.target.value, alarmList.length,setInputVal)
            }}
          />
            
        ) : (
          <></>
        )
      }
    
    </>
  )
  
}

export default DeleteAlarmBtn