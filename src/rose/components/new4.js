import React from 'react'
import '../cont/count.css'

export default function Newfour({ Onecount, OnesetCount}) {
  function subtract(){
    OnesetCount((prev) => prev -4);
    if (Onecount<=-40){
      return(OnesetCount(0)); 
    }
  }
  function plus(){
    OnesetCount((prev) => prev +4);
    if (Onecount>=40){
      return(OnesetCount(0));} 
  }
  return (
    <div>
        <h1> new page by 4</h1>
        <div className='count-con'>
        <button onClick={subtract}>minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>
        </div>
    </div>
  );
}
