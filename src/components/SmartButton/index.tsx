import React, { Component, useEffect, useState } from "react";
import './style.css';


function SmartButton(props: {
  name: string,
  onclick?: any,
  value: string,
  chk?: boolean
  
}){
  const { onclick, name, value, chk  } = props;
  
   const click =  (e: any) => {
    let t = e.target as HTMLInputElement;
    t.classList.toggle("selected-true");
    onclick();
   }


  return(
    <div className="smart-button">
    <input defaultChecked={chk} id={name+value} name={name} type="radio" onClick={click} />
    <label htmlFor={name+value} >
      {value}
    </label>
    
    </div>
  );
 }  

 export default SmartButton;