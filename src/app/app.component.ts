import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Integracao.TOTVS.Winthor.Front';
 constructor(private userService : UserService){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
   const user = localStorage.getItem('user');
   this.userService.setUser(user ? JSON.parse(user) : undefined);
  }
}
