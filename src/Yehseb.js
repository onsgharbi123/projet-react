import React, { useEffect, useState,useRef } from 'react'

export default function Yehseb({start=0, end }) {
  const [state,setState]= useState(null);
    const ref =useRef(start);
const accumulator= end /200;
const updateCounterState=() =>{
if(ref.current < end) {
  const result =Math.ceil(ref.current + accumulator);
  if (result > end) return setState(end)
  setState(result)
  ref.current = result
}
setTimeout(updateCounterState,5)
}

useEffect(()=> {
let isMonted = true;

if (isMonted){
  updateCounterState();
}
return () => (isMonted = false );
},[end,start]);
  return (    <div>+{state}</div>
  )
}