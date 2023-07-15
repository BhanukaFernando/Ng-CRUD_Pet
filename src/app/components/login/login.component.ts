import { Component } from '@angular/core';
import { user } from 'src/app/models/user_loging.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
title = 'user'
User : user ={
  username: '',
  password: '',
}

constructor(private userService:UserService ){

}
  onSubmit(){
    this.userService.login(this.User)
    .subscribe(
      Response =>  {
        console.log(Response);
      }
    );
  }
}
