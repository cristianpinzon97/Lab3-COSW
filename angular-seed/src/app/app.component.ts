import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './services/users.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  private searchInput:string='';
  private modalBody:string='';

  constructor(private modalService: NgbModal,
      public authService: AuthService,
      public router: Router,
      public userService : UsersService
    ) {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/']);
      }
    }

    ver(modal){
    this.userService.findUserByEmail(this.searchInput).subscribe(
      response => {
        this.modalBody="<div>name: "+response.name+"</div><div>lastname: "+response.lastname+"</div><div>image: <img src='"+response.image+"' width='150' height='150' /></div>";
      }, error => {
        this.modalBody="<div>No user found with the email address</div>";


      }
    );
    this.modalService.open(modal);
  }

    isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    signOut() {
      this.authService.signOut();
    }


}
