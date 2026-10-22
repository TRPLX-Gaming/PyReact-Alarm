import {useState, useEffect} from 'react'
import useAlarmTracker from './useAlarmTracker'
import TriggeredAlarm from './TriggeredAlarm'
import './AlarmManager.css'

function AlarmManager() {
  // one alarm handler
  const [alarmList, updateList] = useState([])
  
  // handling different inputs for hh:mm:ss
  const [hourVal, updateHourVal] = useState('')
  const [minuteVal, updateMinuteVal] = useState('')
  const [secondsVal, updateSecondsVal] = useState('')
  
  // handling input visibility 
  const [showTimeContainer, toggleTimeContainer] = useState(true)
  
  // handling alarm btn contents & behavior
  const [alarmBtnText, setAlarmBtnText] = useState('Add Alarm')
  const [alarmPhase, setAlarmPhase] = useState('ALARM')
  
  // consts 
  const alarmPhases = ['ALARM', 'EDIT-ALARM', 'SAVE-ALARM']
  
  // manage triggered alarm 
  const [showTriggered, toggleTriggered] = useState(false)
  
  // updating alarm
  const updateAlarm = () => {
    const newAlarm = [{
      time: `${formattedTime()}`
    }]
    updateList(newAlarm)
    return newAlarm[0].time
  }
  
  // handling time input 
  const handleInput = (val, maxLength, maxTimeVal, updateStateFunc) => {
    const cleaned = val.replace('/\D/g','')
    const timeVal = parseInt(cleaned) 
    if (cleaned.length <= maxLength && timeVal <= maxTimeVal) updateStateFunc(cleaned)
  }
  
  // check if time inputs are empty 
  const formattedTime = () => {
    let [sec, min, hr] = [secondsVal, minuteVal, hourVal]
    
    // handling single digit inputs
    let finSec = sec.length < 1 ? '00' : sec.length === 1 ? `0${sec}` : sec
    let finMin = min.length < 1 ? '00' : min.length === 1 ? `0${min}` : min
    let finHr = hourVal.length < 1 ? '00' : hr.length === 1 ? `0${hr}` : hr
    
    return `${finHr}:${finMin}:${finSec}`
  }
  
  // handle triggered stuff
  useAlarmTracker(alarmList,toggleTriggered)
  
  
  // ui 
  return (
    <>
      {/* alarm container */}
      <div className={'alarm-container'}>
        
        {/* handling either showing the time input or the alarm */}
        
        {
          showTimeContainer ? (
          <>
            <p>Input your time (24h format)</p>
          
            <div className={'center'} style={centerDiv}>
            
              <div style={inputContainerStyle}>
                {/* hour input */}
                <input
                  type={'number'}
                  placeholder={'00'}
                  value={hourVal}
                  onChange={(e)=>{handleInput(e.target.value,2,23,updateHourVal)}}
                  style={inputStyle}
                />
                
                <span style={colonStyle}>:</span>
                
                {/* minute val */}
                <input
                  type={'number'}
                  placeholder={'00'}
                  value={minuteVal}
                  onChange={(e)=>{handleInput(e.target.value,2,59,updateMinuteVal)}}
                  style={inputStyle}
                />
                
                <span style={colonStyle}>:</span>
                
                {/* seconds  */}
                <input
                  type={'number'}
                  placeholder={'00'} 
                  value={secondsVal}
                  onChange={(e)=>{handleInput(e.target.value,2,59,updateSecondsVal)}}
                  style={inputStyle}
                />
                
              </div>
            </div>
          </>
          ) : (
          <>
            {/* to show the time  */}
            <div>
              {/* rendering the alarm list of just 1 */}
              {
                alarmList.map((alarm,index) => (
                  <h1 key={`${index}`}>
                    Alarm set for -&gt; {alarm.time}
                  </h1> 
                ))
              }
                
            </div>
          </>
          )
        }
        
      </div>
      
      {/* button to edit alarm */}
      <div className={'center'}>
        <div className={'btn-container'}>
          
          {/* picking between phases of the alarm btn  */}
          {
            alarmPhase === alarmPhases[0] ? (
              // handle alarm creation
              
              <button
                className={'alarm-btn'}
                onClick={()=>{
                  toggleTimeContainer(false)
                  setAlarmBtnText('Modify Alarm')
                  updateAlarm()
                  setAlarmPhase(alarmPhases[1])
                }}
              >
                {alarmBtnText}
              </button>
              
            ) : alarmPhase === alarmPhases[1] ? (
            // handle when alarm has been created
            
              <button
                className={'alarm-btn'}
                onClick={()=>{
                  toggleTimeContainer(true)
                  setAlarmBtnText('Save Changes')
                  setAlarmPhase(alarmPhases[2])
                }}
              >
                {alarmBtnText}
              </button>
              
            ) : alarmPhase === alarmPhases[2] ? (
              // handle when you want to save new alarm time 
              <button
                className={'alarm-btn'}
                onClick={()=>{
                  toggleTimeContainer(false)
                  setAlarmBtnText('Modify Alarm')
                  updateAlarm()
                  setAlarmPhase(alarmPhases[1])
                }}
              >
                {alarmBtnText}
              </button>
              
              
            ) : (
            
              // fallback case 
              <button className={alarm-btn}>Incomplete</button>
              
            )
          }
          
          {/* clear input contents */}
          <button
            className={'clear-btn'}
            onClick={()=>{
              updateHourVal('')
              updateMinuteVal('')
              updateSecondsVal('')
            }}>
            Clear All 
          </button>
          
        </div>
      </div>
      
      {/* alarm trigger stuff */}
      <div className={'center'} style={{marginTop:'30px'}}
      >
        {
          showTriggered ? (
          <>
            <TriggeredAlarm 
              targetAlarmTime={alarmList[0].time}
              showDisplay={toggleTriggered} 
            />
          </>
          ) : <div></div>
        }
      </div>
      
    </>
  )
  
}

// styles for input layout 
const inputStyle = {
  width: '50px',
  height: '50px',
  fontSize: '24px',
  textAlign: 'center',
  backgroundColor: 'white',
  color: 'black', 
  border: '1px solid #333',
  borderRadius: '4px',
  outline: 'none'
}

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: 'transparent',
  padding: '15px',
  borderRadius: '8px',
  width: 'fit-content' 
}

const colonStyle = {
  fontSize: '24px',
  color: 'black',
  fontWeight: 'bold'
}

const centerDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
}

export default AlarmManager

// dev notes:
/**
 * 1 - limit adding of multiple alarm items to just one 
 * 2 - manage that one alarm item for easy work(update & remove)
 * 3 - try adding a server based alarm store but using only file storage on a free BaaS platform isnt that persistent unless for personal use which user mgt sys couldve helped but nah
  * 4 - round up the UI, resort to client based storage and deploy final version
 */