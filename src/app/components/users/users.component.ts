import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Angular',
        lastName: 'Node',
        email: 'aaa@gmail.com',
        isActive: false,

        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'React',
        lastName: 'Node',
        email: 'bbb@gmail.com',
        isActive: true,

        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Vue',
        lastName: 'Node',
        email: 'ccc@gmail.com',
        isActive: false,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      }
    ];
    this.loaded = true;

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  onSubmit(e) {
    //console.log(13);
    e.preventDefault();
  }
  fireEvent(e) {
    console.log(e.target.value);
  }
}
