import{Component, OnInit}from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { AuthService } from '../../common/auth.service';

import {UsersService}from '../../services/users.service';
import {User}from '../../models/user';

@Component({
  selector: 'user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: User[]=[];

  constructor(public userService: UsersService, public authService: AuthService ) {

  }

  ngOnInit() {
    this.userService.list().subscribe(usersResponse=>{
      this.users = usersResponse;
    })
  }

  isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    signOut() {
      this.authService.signOut();
    }
}