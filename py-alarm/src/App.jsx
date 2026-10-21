import { useState } from 'react'
import DisplayTime from './DisplayTime'
import AlarmManager from './AlarmManager'
import './App.css'

function App() {
  
  // states init 
  const [isInverse, setTitleState] = useState(false)
  
  
  // title change
  const hollowStyle = {
    color: isInverse ? 'red' : 'transparent',
    WebkitTextStroke: isInverse ? '2px marine' : '2px black'
  }
  
  
  // display content
  return (
    <>
      {/* show my ownership */}
      <div className={'owner-div'}>
        <h1 className={'owner'} style={hollowStyle}>
          Alarm by TRPLX
        </h1>
        
        <sub
          onClick={()=>{
            if(isInverse) setTitleState(false)
            else setTitleState(true)
          }}
        >
          (tap me for a surprise)
        </sub>
        
      </div>
  
      <DisplayTime />
      
      <AlarmManager />
      
    </>
  
  )
}

export default App
