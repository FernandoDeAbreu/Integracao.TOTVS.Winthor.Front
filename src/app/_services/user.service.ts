import { Injectable } from '@angular/core';
import { User } from '../pages/_models/user';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../pages/_models/userGit';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl:string = environment.apiUrl;
  user: User | undefined;

  constructor(private httpClient : HttpClient){}

  getGitUser(username : string){
    return this.httpClient.get<UserGit>(this.baseUrl + 'users/' + username).pipe(
      map((reponse: UserGit) =>{
      return reponse;
      })
    )
  }

  setUser(user: User | undefined) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getUser(){
    return this.user;
  }
}
