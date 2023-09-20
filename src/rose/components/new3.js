import React from 'react'
import '../cont/count.css'

export default function Newthree({ Onecount, OnesetCount}) {
  function subtract(){
    OnesetCount((prev) => prev -3);
    if (Onecount<=-30){
      return(OnesetCount(0)); 
    }
  }
  function plus(){
    OnesetCount((prev) => prev +3);
    if (Onecount>=30){
      return(OnesetCount(0));} 
  }
  return (
    <div>
        <h1> new page by 3</h1>
        <div className='count-con'>
        <button onClick={subtract}>minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>
        </div>
    </div>
  );
}
