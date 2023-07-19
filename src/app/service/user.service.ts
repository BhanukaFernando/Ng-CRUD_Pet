import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userloginrequest } from '../models/userloginrequest.model';
import { Observable } from 'rxjs';
import { UserLoginResponse } from '../models/UserLoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  bassUrl= 'http://darshana99-001-site1.dtempurl.com/api/Users/login';

  constructor(private http : HttpClient ) { }

  login(userloginrequest :userloginrequest) : Observable<UserLoginResponse>{
   return this.http.post<UserLoginResponse>(this.bassUrl, userloginrequest);
  }

}
