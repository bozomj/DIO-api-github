import React, { useEffect, useState} from 'react';

import Search from './components/Search';
import Profile from './components/Profile';
import Repos from './components/Repos';
import ApiGithub from './services/api-github';
import { Icard } from './components/Card';

import './App.css';


function App() {
  const api = new ApiGithub;

  const [profile, setProfile] = useState("bozomj");
  const [repo, setRepo] = useState<"repo" | "starred">();
  let   [list, setList] = useState<Icard[]>();

  useEffect(()=>{
      
      api.getRepo(profile).then(setList);
      
    },[]);

  useEffect(()=>{
    (repo == "starred")
    ? api.getStarred(profile).then(setList)
    : api.getRepo(profile).then(setList);

  },[repo]);

  useEffect(()=>{
    setRepo("repo");
    api.getRepo(profile).then(setList);
  },[profile])

  function getRepo(){
    setRepo("repo");
  }

  function getStarred(){
    setRepo("starred");
  }
  

  return (
    <div className='app'>
        <Search  profile={setProfile} />
        <Profile profile={profile} actions={{
          getRepositories: getRepo,
          getStarreds: getStarred

        }}/>
        <Repos repos={list} />
    </div>
  );
}

export default App;
