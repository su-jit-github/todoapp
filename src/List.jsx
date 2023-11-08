import React, { useEffect, useState } from 'react'

const List = (item) => {
    const [line,setLine]=useState(false);
    const del=()=>{
        setLine(true);
    }
    
        
   console.log(item.text);
    // console.log(iArr)
  return (
    <>
    
    
   
    <li style={{textDecoration:line?"line-through":""}}>
    <button type="button" onClick={()=>{del()}} className='delbtn'>-</button>{item.text}</li>
    </>
        
  )
}

export default List