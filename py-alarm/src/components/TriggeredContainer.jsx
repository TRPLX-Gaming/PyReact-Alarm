// temporarily discontinued for quick round up 
import { useState } from 'react'

function TriggeredContainer({
  
}) {
  // array of all alarm triggers tracking separate alarms 
  const [triggerList, updateTriggerList] = useState([])
  // thinking of a state mgr that toggles which triggers can show
  const [triggerDisplay, setTriggerDisplay] = useState({
    show: false,
    list: []
  })
  
  
  return (
    
    
    
  )
  
}

export default TriggeredContainer