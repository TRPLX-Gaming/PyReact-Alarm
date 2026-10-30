import {
  centerDiv,
  inputContainerStyle,
  inputStyle,
  colonStyle
} from './../utils/styleObjects'
import {
  handleTimeInput as handleInput
} from './../utils/alarmMethods'
import './../styles/AlarmManager.css'

/**
 * this comp has input elems for hr, min & secs
 * it will just pass up the info to the AlarmManager
 */

function TimeInputContainer({
  setSecondsVal,
  setMinutesVal,
  setHourVal,
  secondsVal,
  minuteVal,
  hourVal
}) {
  
  return (
    
    <>
      <p>Input your time (24h format)</p>
          
      <div className={'center'} style={centerDiv}>
            
        <div style={inputContainerStyle}>
          
          {/* hour input */}
          <input
            type={'number'}
            placeholder={'00'}
            value={hourVal}
            onChange={(e)=>{handleInput(e.target.value,2,23,setHourVal)}} 
            style={inputStyle}
          />
            
          <span style={colonStyle}>:</span>
          
          {/* minute val */}
          <input
            type={'number'}
            placeholder={'00'}
            value={minuteVal}
            onChange={(e)=>handleInput(e.target.value,2,59,setMinutesVal)}
            style={inputStyle}
          />
          
          <span style={colonStyle}>:</span>
          
          {/* seconds */}
          <input
            type={'number'}
            placeholder={'00'} 
            value={secondsVal}
            onChange={(e)=>handleInput(e.target.value,2,59,setSecondsVal)}
            style={inputStyle}
          />
                
        </div>
        
      </div>
        
    </>
      
  )
  
}

export default TimeInputContainer