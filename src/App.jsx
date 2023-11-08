import { useState } from 'react'
import './App.css'
import List from './List'

const App=()=> {
    const [inpVal,setInputValue]=useState("")
    const [inpArr,setArr]=useState([])
    const setInput = (e) =>{
      setInputValue(e.target.value)
    }
    const setValue=() =>{
      
      setArr((item)=>{
        return [...item,inpVal]
      })
      setInputValue("")
    }


  return (
    <>
      
        <div className='center-div'>
        <h1>To Do Lists</h1>
        <input 
        type="text" 
        placeholder="Enter a list"
        onChange={setInput}
          className='inptext'
          value={inpVal}
        />
        <button onClick={setValue} className='mainbtn'>+</button>
        
        <div>
          <ol>
            {
              inpArr.map((item,index)=>(
                <List key={index} text={item}/>
              ))
            }
            
          </ol>
        </div>
        </div>
        
        
     
    </>
  )
}

export default App
