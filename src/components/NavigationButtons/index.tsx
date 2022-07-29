import React, { useEffect, useState } from "react";
import SmartButton from "../SmartButton";
import './style.css';

interface InavigationButtons {
  actions: {
    getRepositories: ()=>{},
    getStarreds: ()=>{} 
  }
}

function NavigationButtons(props: InavigationButtons) {
  const { getRepositories, getStarreds } = props.actions;
  const  [change, setChange] = useState("");
  const getRepo = () => {
    setChange("repo");
    getRepositories();

  }
  const getStarred = () => {
    setChange("starred");
    getStarreds();

  }

 
  

  return (
    <nav className="navigationButtons">
      <SmartButton chk={true} name="mnu" onclick={getRepo} value="Repositories"/>
      <SmartButton name="mnu" onclick={getStarred} value="Starred" />
    </nav>
  )
}

export default NavigationButtons;

