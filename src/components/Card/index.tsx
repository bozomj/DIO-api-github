import React from "react";
import './style.css';

export interface Icard {
  name: string;
  full_name: string;
  html_url: string;
}


function Card(props: Icard) {
  
  const { name, full_name, html_url } = props;

  return(
    <div className="card">
      <a href={html_url} target="_BLANK">
      
      <h2>{name}</h2>
      {full_name}
      
      </a>
    </div>
  )
}

export default Card;