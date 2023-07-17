import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userloginrequest } from '../models/userloginrequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  bassUrl= 'http://darshana99-001-site1.dtempurl.com/api/Users/login';

  constructor(private http : HttpClient ) { }

  login(User :userloginrequest) : Observable<any>{
   return this.http.post<userloginrequest>(this.bassUrl, User);
  }

}
