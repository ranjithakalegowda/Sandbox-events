import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd:boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Angular',
          lastName: 'Node',
          age: 20,
          address: {
            street: 'Bangalore',
            city: 'Bangalore',
            state: 'karnataka'
          },
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: false,
          balance: 100,
          registered: new Date('01/02/2019 08:30:00')
        },
        {
          firstName: 'React',
          lastName: 'Node',
          age: 20,
          address: {
            street: 'Mysore',
            city: 'Mysore',
            state: 'karnataka'
          },
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: true,    
          balance: 200,
          registered: new Date('01/02/2019 08:30:00')
        },
        {
          firstName: 'Vue',
          lastName: 'Node',
          age: 20,
          address: {
            street: 'Mandya',
            city: 'Mandya',
            state: 'karnataka'
          },
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: false,      
          balance: 100,
          registered: new Date('01/02/2019 08:30:00')
        }
      ];
      this.loaded = true;
      this.setCurrentClasses();
    // this.showExtended = false;
    this.addUser({
      firstName: 'David',
      lastName: 'Jackson'
    })
    
  }

  addUser(user : User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }
  setcurrentStyles(){
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px'
    }
  }
}
