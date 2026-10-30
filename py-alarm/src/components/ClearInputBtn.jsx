// this one just accesses the input elems and clears the val
import { clearTimeInputs } from './../utils/alarmMethods'
import { centerDiv } from './../utils/styleObjects'
import './../styles/BtnStyles.css'

function ClearInputBtn({
  secInputFunc,
  minInputFunc,
  hrInputFunc
}) {
  
  return (
    
    <div style={centerDiv}>
      <button
        className={'clear-btn'}
        onClick={()=>{
          clearTimeInputs(
            secInputFunc,
            minInputFunc,
            hrInputFunc
          )
        }}
      >
        Clear Time Input
      </button>
    </div>
    
  )
  
}

export default ClearInputBtn