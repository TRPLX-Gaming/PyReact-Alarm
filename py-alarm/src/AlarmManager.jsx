import {useState, useEffect} from 'react'

function AlarmManager() {
  // demo for adding & modifying alarms 
  const [itemsList, updateList] = useState([
    {id:4, time:'12:33:56'}
  ])
  let ctr = 0
  
  const addItem = () => {
    ctr++
    const newItem = {
      id:ctr,
      time: new Date().toLocaleTimeString()
    }
    updateList([...itemsList, newItem])
  }
  
  return (
    <div className={'items-container'} style={{textAlign:'center',fontSize:'35px'}}>
      
      {itemsList.map((item, index) => {
        return (
          <p key={`${index}`} style={{marginTop:'15px', color:'black'}}>
            ID: {item.id} -&gt; Time: {item.time}
          </p>
        )
      })}
      
      <button onClick={()=>{addItem()}}>
        Add item 
      </button>
      
    </div>
  )
  
}

export default AlarmManager

// dev notes:
/**
 * 1 - limit adding of multiple alarm items to just one 
 * 2 - manage that one alarm item for easy work(update & remove)
 * 3 - try adding a server based alarm store but using only file storage on a free BaaS platform isnt that persistent unless for personal use which user mgt sys couldve helped but nah
  * 4 - round up the UI, resort to client based storage and deploy final version
 */