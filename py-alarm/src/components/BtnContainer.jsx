import { centerDiv, stackDiv } from './../utils/styleObjects'
import AddAlarmBtn from './AddAlarmBtn'
import DeleteAlarmBtn from './DeleteAlarmBtn'
import ModifyAlarmBtn from './ModifyAlarmBtn'
import './../styles/BtnStyles.css'

function BtnContainer({
  btnState,
  btnConfigs,
  updateBtnState
}) {
  
  const btns = {
    add:<AddAlarmBtn 
          alarmList={btnConfigs.alarmList}
          updateAlarmFunc={btnConfigs.updateAlarmList}
          secondsVal={btnConfigs.secondsVal}
          minutesVal={btnConfigs.minuteVal}
          hourVal={btnConfigs.hourVal}
          setSecondsVal={btnConfigs.setSecondsVal}
          setMinutesVal={btnConfigs.setMinutesVal}
          setHourVal={btnConfigs.setHourVal}
          setAlarmBtnPhase={updateBtnState}
        />,
    
    modify:<ModifyAlarmBtn
              alarmList={btnConfigs.alarmList}
              updateAlarmList={btnConfigs.updateAlarmList}
              setTimeInputVisibility={btnConfigs.toggleTimeInput}
            />,
    
    deleteBtn:<DeleteAlarmBtn
                alarmList={btnConfigs.alarmList}
                updateAlarmList={btnConfigs.updateAlarmList}
                setBtnState={updateBtnState}
              />,
              
  }
  
  // console.log(btnConfigs,'gg\n',updateBtnState)
  
  return (
    
    <div className={'btn-container'} style={stackDiv} style={{marginTop:'20px',marginBottom:'15px'}}>
      
      {/* add alarm btn */}
      {btns.add}
      
      {
        btnState === 'ALARM-SET' ? (
          <>
            {/* show btns when alarm set */}
            
            {/* delete btn */}
            {btns.deleteBtn}
            
            {/* modify btn */}
            {btns.modify}
            
          </>
        ) : (
          <></>
        )
      }
      
    </div>
    
  )
  
}

export default BtnContainer