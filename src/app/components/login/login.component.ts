import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { UserLoginResponse } from 'src/app/models/UserLoginResponse.model';
import { userloginrequest } from 'src/app/models/userloginrequest.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
title = 'user'
userloginrequest : userloginrequest ={
  username: '',
  password: '',
};
 userLoginResponse: UserLoginResponse = {
   User: null,
   Authentication: null,
 }
 
constructor(private userService:UserService ){

}
  onSubmit(){
    this.userService.login(this.userloginrequest)
    .subscribe(
      Response =>  {
        // console.log(Response);
        this.userLoginResponse = Response;
        // console.log(this.userLoginResponse.User),
        this.userLoginResponse = Response;
        // console.log(this.userLoginResponse.Authentication)
        this.userLoginResponse = Response;
        // console.log(this.userLoginResponse.Authentication?.token)
        if(this.userLoginResponse.Authentication?.token != null){
          localStorage.setItem('jwtToken', this.userLoginResponse.Authentication?.token);
        }    

        // localStorege eka athule backend eken ena token eka store karagannawa
        console.log(localStorage.getItem('jwtToken'))
        }
    );
  }
}
