import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

 // users: String[] = ['Fernando', 'Ravih', 'Eloáh', 'Neinha'];

 userSeleciona: User | undefined;
 userForm: FormGroup = new FormGroup({});

constructor(private fb : FormBuilder, private userServices : UserService){}
  ngOnInit(): void {
    this.initilizeForm();
  }

initilizeForm(){
  this.userForm = this.fb.group({
    nome:['',[Validators.required, Validators.maxLength(50)]],
    idade:['',[Validators.required, Validators.min(12), Validators.max(100)]],

  });
}

SubmitFrom(){
  if(this.userForm.valid){
   this.users.push(this.userForm.value);
   this.userForm.reset();
  }
}

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
   this.userSeleciona = user;
   this.userServices.setUser(user);
 }
}
