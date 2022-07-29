import React, { useEffect } from "react";
import axios from 'axios';
import { BASE_URL } from '../commons/utils';

class ApiGithub {
  
  api = axios.create({
    baseURL: BASE_URL,
  });

  async getProfile(profile: string){
    
   return await this.api.get(`${BASE_URL+profile}`)
    .then((response) => response.data)
    .catch(console.log);
    
  }

  async getRepo(profile: string){
    
   return await this.api.get(`${BASE_URL+profile}/repos`)
    .then((response) => response.data)
    .catch(console.log);
    
  }
  async getStarred(profile: string){ 
    
   return await this.api.get(`${BASE_URL+profile}/starred`)
    .then((response) => response.data)
    .catch(console.log);
    
  }


}



export default ApiGithub;