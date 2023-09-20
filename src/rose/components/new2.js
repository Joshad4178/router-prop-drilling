import React from 'react'
import '../cont/count.css'

export default function Newtwo({ Onecount, OnesetCount}) {
  function subtract(){
    OnesetCount((prev) => prev -2);
    if (Onecount<=-20){
      return(OnesetCount(0)); 
    }
  }
  function plus(){
    OnesetCount((prev) => prev +2);
    if (Onecount>=20){
      return(
        <p>please start from begining</p>,
        OnesetCount(0));} 
  }
  return (
    <div>
        <h1> new page by 2</h1>
        <div className='count-con'>
        <button onClick={subtract}>minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>
        </div>
    </div>
  );
}
