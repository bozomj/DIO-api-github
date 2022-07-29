import React, { useState, useEffect } from "react";
import './style.css';
import Card, { Icard } from "../Card";

export interface Irepos{
  repos: Icard[] | undefined
}

  function Repos(props: Irepos ) {
  //const api = new ApiGithub;
  let { repos } = props;
  //const [repos, setRepos] = useState<any>();
  //const list: "repo" | "starred";


  //const [list, setList] = useState<"repo"|"starred">();
  

  // useEffect(()=>{
  //   //setList("repo");
  //   api.getProfile('bozomj').then(setRepos);
    
  // },[]);

  const showCards=()=>{
  return repos && repos.map((repo: Icard) => {

      return <Card 
      key={repo.full_name}
      name={repo.name}
      full_name={repo.full_name}
      html_url={repo.html_url}  />
    })
  }


  return(
    <div id="repos">
      {showCards()}
    </div>
  )
}

export default Repos;