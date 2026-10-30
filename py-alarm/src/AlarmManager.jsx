import {useState, useEffect} from 'react'
import TimeInputContainer from './components/TimeInputContainer'
import useAlarmTracker from './utils/useAlarmTracker'
import TriggeredAlarm from './components/TriggeredAlarm'
import AddAlarmBtn from './components/AddAlarmBtn'
import ModifyAlarmBtn from './components/ModifyAlarmBtn'
import './styles/AlarmManager.css'

function AlarmManager() {
  // bunch of state mgt props to be passed down
  // one alarm handler -> multiple alarm handler
  const [alarmList, updateList] = useState([])
  
  // handling different inputs for hh:mm:ss
  const [hourVal, updateHourVal] = useState('')
  const [minuteVal, updateMinuteVal] = useState('')
  const [secondsVal, updateSecondsVal] = useState('')
  
  // handling input visibility 
  const [showTimeContainer, toggleTimeContainer] = useState(true)
  
  // handling alarm btn contents & behavior
  const [alarmBtnText, setAlarmBtnText] = useState('Start Alarm')
  const [alarmPhase, setAlarmPhase] = useState('NO-ALARM-SET')
  
  // handling alarm index input & state mgt 
  const [alarmIndex, updateAlarmIndex] = useState('')
  const [selectAlarmState, setAlarmSelectState] = useState(false)
  
  // consts 
  const alarmPhases = ['NO-ALARM-SET','ALREADY-SET','CHOOSE-ALARM','SAVE-CHANGES']
  
  // manage triggered alarm 
  const [showTriggered, toggleTriggered] = useState(false)
  
  // --------------------------------------------
  /*
  // add alarm
  const addAlarm = () => {
    const newAlarm = [{
      time: `${formattedTime()}`
    }]
    updateList([...alarmList,newAlarm])
  }
  */
  
  // update alarm 
  const updateAlarm = index => {
    const modifiedAlarm = {
      time: `${formattedTime()}`
    }
    
    alarmList[index] = modifiedAlarm
    updateList([...alarmList])
  }
  
  // handling time input 
  const handleInput = (val, maxLength, maxTimeVal, updateStateFunc) => {
    const cleaned = val.replace('/\D/g','')
    const timeVal = parseInt(cleaned) 
    if (cleaned.length <= maxLength && timeVal <= maxTimeVal) updateStateFunc(cleaned)
  }
  
  // handling alarm input 
  const handleIndexInput = (val, maxLength, updateStateFunc) => {
    const cleaned = val.replace('/\D/g','')
    if(cleaned.length <= maxLength) updateStateFunc(parseInt(cleaned))
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
  
  
  // alarm btn components 
  const btns = {
    add: <AddAlarmBtn 
      alarmList={alarmList}  
      addAlarmFunc={addAlarm}
      setAlarmEditingPhase={setAlarmPhase}
    />,
    modify: <ModifyAlarmBtn />,
  }
  
  
  // ui 
  return (
    <>
      {/* alarm container */}
      <div className={'alarm-container'}>
        
        {/* handling either showing the time input or the alarm */}
        
        {
       //   showTimeContainer ? (
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
        {/*
          </>
          ) : (
          <>
        */}
            {/* to show the time  */}
            <div>
              {/* rendering the alarm list */}
              {
                alarmList.map((alarm,index) => (
                  <h1 key={`${index}`}
                    style={{marginTop:'15px'}}
                  >
                    {index + 1}. Alarm set for -&gt; {alarm[index].time}
                  </h1> 
                ))
              }
                
            </div>
          </>
          //)
        }
        
      </div>
      

      
         <div className={'center'}>
         <div className={'btn-container'}>
           
          {/* button to edit alarm */}
          {/* old version */}
          {/*-------------------------OLD-------------------*/}
          {    
        //     {/* picking between phases of the alarm btn  */}
        //     {
        //       alarmPhase === alarmPhases[0] ? (
        //         // handle alarm creation
                
        //         <button
        //           className={'alarm-btn'}
        //           onClick={()=>{
        //             toggleTimeContainer(false)
        //             setAlarmBtnText('Modify Alarm')
        //             updateAlarm()
        //             setAlarmPhase(alarmPhases[1])
        //           }}
        //         >
        //           {alarmBtnText}
        //         </button>
                
        //       ) : alarmPhase === alarmPhases[1] ? (
        //       // handle when alarm has been created
        //       <>
        //         <button
        //           className={'alarm-btn'}
        //           onClick={()=>{
        //             toggleTimeContainer(true)
        //             setAlarmBtnText('Save Changes')
        //             //setAlarmPhase(alarmPhases[2])
        //           }}
        //         >
        //           {alarmBtnText}
        //         </button>
                
        //         {/* select alarm index input element */}
        //         <input 
        //           type={'number'}
        //           className={'alarm-index'}
        //           placeholder={`${alarmList.length >= 2 ?
        //             (`Index: 1 - ${alarmList.length - 1}`)
        //           : 
        //             (`Index: 1 - 2`)
        //           }`}
        //           value={alarmIndex}
        //           onClick={(e)=>{handleIndexInput(e.target.value,2,updateAlarmIndex)}}
        //         />
        //       </>
              
        //       ) : alarmPhase === alarmPhases[2] ? (
        //         // handle when you want to save new alarm time 
        //         <button
        //           className={'alarm-btn'}
        //           onClick={()=>{
        //             toggleTimeContainer(false)
        //             setAlarmBtnText('Modify Alarm')
        //             updateAlarm()
        //             setAlarmPhase(alarmPhases[1])
        //           }}
        //         >
        //           {alarmBtnText}
        //         </button>
                
                
        //       ) : (
              
        //         // fallback case 
        //         <button className={alarm-btn}>Incomplete</button>
                
        //       )
        //     }
            
        }
            
          {/*---------------------------OLD-----------------*/}
            
          {/* new alarm btn state mgt */}
          
          {
            btns.add
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

// v1.0.0
// dev notes:
/**
 * 1 - limit adding of multiple alarm items to just one 
 * 2 - manage that one alarm item for easy work(update & remove)
 * 3 - try adding a server based alarm store but using only file storage on a free BaaS platform isnt that persistent unless for personal use which user mgt sys couldve helped but nah
  * 4 - round up the UI, resort to client based storage and deploy final version
 */
 
 // v1.1.0 
 // new patch notes 
 /**
  * will update the alarm system to multiple instead of just one
  * creating an array of alarms in which every alarm is tracked
  */