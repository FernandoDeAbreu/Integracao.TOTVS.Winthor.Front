import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { User } from "../../_models/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
   @Input() user: User = {
    nome:'',
    idade: 0
   };

   @Output() userInfoEmitter = new EventEmitter<User>();

   RetornarDados(){
    this.userInfoEmitter.emit(this.user)
   }
}
