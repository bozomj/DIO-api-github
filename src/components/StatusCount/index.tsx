import React from "react";
import './style.css';


export interface IstatusCount{
    followers: number,
    following: number,
    public_gits: number,
    public_repos: number
}

function StatusCount(props: { status: IstatusCount | {} }){
  const { followers, following, public_gits, public_repos }:any = props.status;
  
  return(
    <ul className="statusCount">
        <li><span>Followers </span>{followers ?? 0}</li>
        <li><span>Following </span>{following ?? 0}</li>
        <li><span>Gits </span>{public_gits ?? 0}</li>
        <li><span>Repos </span>{public_repos ?? 0}</li>
    </ul>
    
  )
}

export default StatusCount;