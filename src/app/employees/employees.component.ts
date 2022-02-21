import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
import { USERS } from '../mock-users';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  users = USERS;
  inpTitle = '';
  fs = 16;

  constructor() { }
  // hero: User[] = [{
  //   id: 1,
  //   name: 'Windstorm',
  //   todo: ['jsndjsnd', 'homework']
  // }];
  // let numSize: Number = 16;



  ngOnInit(): void {
  }
  myFunc(e) {
    this.users.push({ id: 22, name: 'Ngoc Anh', todo: 'clean room' })
    this.users = this.users.filter(x => x.id != 11)
    console.log("function called", e.innerHTML);
  }
  changeSize(e) {
    console.log('change size', e);
    this.fs = e
  }

}
