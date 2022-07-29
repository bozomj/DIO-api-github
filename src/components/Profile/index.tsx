import React, { Component, useEffect, useState } from "react";
import ApiGithub from "../../services/api-github";
import NavigationButtons from "../NavigationButtons";
import StatusCount, { IstatusCount } from "../StatusCount";
import './style.css';

interface IProfile {
  profile: string,
  actions: any
}

interface IprofileData {
  name: string,
  avatar_url: string,
  login: string,
  company: string,
  location: string,
  blog: string,
  followers: number,
  following: number,
  public_gits: number,
  public_repos: number
}




function Profile(props: IProfile) {
  let statusCount = {}
  const { actions, profile } = props;
  const api = new ApiGithub;

  const [profileData, setProfileData] = useState<IprofileData | any>();

  useEffect(() => {
    api.getProfile(profile).then(setProfileData);


  }, []);

  useEffect(() => {
    api.getProfile(profile).then(setProfileData);
  }, [profile]);


  statusCount = {
    public_repos: profileData?.public_repos,
    public_gits: profileData?.public_gits,
    followers: profileData?.followers,
    following: profileData?.following
  }



  console.log(profileData);

  return (
    <div id="profile">
      <a target="_BLANK" href={profileData?.html_url}>
        <img src={profileData?.avatar_url} alt="" />
      </a>
      <ul>
        <li><h1>{profileData?.name}</h1></li>
        <li><span>Username: </span>{profileData?.login}</li>
        <li><span>Company: </span>{profileData?.company}</li>
        <li><span>Location: </span>{profileData?.location}</li>
        <li><span>Blog: </span><a target="_BLANK" href={profileData?.blog}> {profileData?.blog}</a></li>

        <li><StatusCount status={statusCount} /></li>
      </ul>
      <NavigationButtons actions={actions} />
    </div>
  )
}

export default Profile;
