import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
user : UserGit | undefined;
username: string = '';
  constructor(
    private userService : UserService,
    private toastr : ToastrService

  ){}

  getGitUser(){
    if(this.username.length == 0){
      this.toastr.error('O campo user e obrigatorio');
      return;
    }
    this.userService.getGitUser(this.username).subscribe(
      (reponse : UserGit) => {
      this.user = reponse;
      },
      (error) =>{
      this.toastr.error(error.error.message);
      }
   );
  }
}

