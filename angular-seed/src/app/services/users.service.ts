import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { User}from '../models/User';

@Injectable()
export class UsersService extends APIService {

private resourceUrl = 'user';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  create(name: string, lastname: string, image: string, username:string,email:string, password:string): Observable<User[]> {
    return this.post(this.resourceUrl,new User(name, lastname, image,username,email, password));

  }

  list(): Observable<User[]> {
    return this.get(this.resourceUrl);
  }

  getUser(id: Number): Observable<User>{
    return this.get(this.resourceUrl+"/Byid."+id);
  }

  findUserByEmail(email: string ): Observable<User>{
    return this.get(this.resourceUrl+"/ByEmail."+email);
  }

  findUserByEmailAndPassword( email: string , password: string  ):Observable<User>{
    return this.get(this.resourceUrl+"/ByEmailAndPassword."+email+"."+password);
  }
}