import React from 'react'
import '../cont/count.css'

export default function Newone({ Onecount, OnesetCount}) {
  function subtract(){
    OnesetCount((prev) => prev -1);
    if (Onecount<=-10){
      return(OnesetCount(0)); 
    }
  }
  function plus(){
    OnesetCount((prev) => prev +1);
    if (Onecount>=10){
      return(OnesetCount(0));} 
  }
  
  return (
    <div>
        <h1> new page</h1>
        <div className='count-con'>
        <button onClick={subtract}>minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>
        </div>
    </div>
  );
}
