import React, { SyntheticEvent, useState } from "react";
import './style.css';

function Search(props: any) {

  let value = "";
  let { profile } = props;

  const getProfile = ()=>{
    profile(value);
  }
  const search = (keydown: any)=>{
    if(keydown.key == "Enter"){

      getProfile();
      keydown.target.value = "";
    }
    console.log(keydown.target);
  }
  const changeValue = (e: any) =>{
    value = e.target.value;
  }
  return(
    <div className="search">
      <input
      onChange={changeValue} 
      type="text" id="searchProfile"
      onKeyDown={search}
        />  
      <button type="button" onClick={getProfile}>Procurar</button>
    </div>
  ) 
}

export default Search;