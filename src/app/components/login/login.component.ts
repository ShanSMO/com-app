import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import { FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ResponseObject} from '../../domains/response-object';
import {LocalStorage} from '../../Utils/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  response: ResponseObject;

  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    userType: new FormControl()
  });

  constructor(private route: Router,
              private userService: UserService,
              private toast: ToastrService
              ) { }

  ngOnInit() {
  }

  login() {
    const loginData = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password,
      userType: this.loginForm.value.userType
    };
    this.userService.login(loginData).subscribe((data) => {
      this.response = JSON.parse(JSON.stringify(data));
      if (this.response.status) {
          this.route.navigateByUrl('/home/dashboard');
          localStorage.setItem(LocalStorage.LS_USER_NAME, data.object.userName)
      } else {
          this.toast.info(this.response.message, 'Login Failed !');
      }
    });
  }

  checkOtherAccounts() {

  }
}
