import React, { useState } from 'react'
import './count.css'
import Newone from '../components/new1';
import Newtwo from '../components/new2';
import Newthree from '../components/new3'
import Newfour from '../components/new4';
export default function Count() {
    const [count, setCount] = useState(0);
    let add = ()=> {
        setCount((prev) => prev + 5);
    }
    
    let minus = ()=> {
        setCount((prev) => prev - 5);
    }
    
    if (count>=50){
      add = () => setCount(0);
    } else if (count<=-50){
      minus = () => setCount(0);
    }
  return (
    <div>
        <h2> Count page</h2>
        <div className='count-con'>
            <button onClick={minus}>Minus</button>
            <p>{count}</p>
            <button onClick={add}>Add</button>
        </div>
        <Newone Onecount = {count} OnesetCount = {setCount}/>
        <Newtwo Onecount = {count} OnesetCount = {setCount}/>
        <Newthree Onecount = {count} OnesetCount = {setCount}/>
        <Newfour Onecount = {count} OnesetCount = {setCount}/>
    </div>
  );
}
