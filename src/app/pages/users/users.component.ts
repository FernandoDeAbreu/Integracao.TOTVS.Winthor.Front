import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: String[] = [
    'Fernando', 'Ravih', 'Eloáh', 'Neinha'
  ];
}
