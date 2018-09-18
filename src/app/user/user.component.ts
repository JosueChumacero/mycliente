import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  private users: Array<UserModel>;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loadUser();
  }

  private loadUser(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }
  public editUser(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/crearteUserComponent']);
  }

  public deleteUser(user: UserModel): void {
    this.userService.deleteUsers(user);
  }
}
