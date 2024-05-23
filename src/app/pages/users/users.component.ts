import { Component } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

 // users: String[] = ['Fernando', 'Ravih', 'Eloáh', 'Neinha'];
 users: User[] = [
  {
    nome: 'Fernando Abreu',
    idade: 33,
  },
  {
    nome: 'Neinha Abreu',
    idade: 35,
  },
  {
    nome: 'Eloáh',
    idade: 10,
  },
  {
    nome: 'Ravíh',
    idade: 4,
  }
 ];
 infoUserSelecionado(user: User){
  console.log(user);
 }
}
