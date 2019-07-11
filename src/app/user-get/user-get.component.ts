import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.user.id = '';
    this.user.name = '';
    this.user.email = '';
  }

  onSubmit() {
    this.userService.get(this.user.name).subscribe(data => {
      this.user = data;
    });
  }

}
