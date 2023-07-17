import { Component } from '@angular/core';
import { userloginrequest } from 'src/app/models/userloginrequest.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
title = 'user'
User : userloginrequest ={
  username: '',
  password: '',
}

constructor(private userService:UserService ){

}
  onSubmit(){
    this.userService.login(this.User)
    .subscribe(
      Response =>  {
        this.User = Response
        console.log(Response);
      }
    );
  }
}
