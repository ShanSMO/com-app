import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ResponseObject} from '../../domains/response-object';
import {Regex} from '../../Utils/regex';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  response: ResponseObject ;
  registrationForm = new FormGroup({
    email: new FormControl(null, [Validators.pattern(Regex.REGEX_EMAIL), Validators.required]),
    password: new FormControl(null, [Validators.required]),
    userType: new FormControl(1),
    contactNumber: new FormControl(null , [Validators.pattern(Regex.REGEX_DIGITS), Validators.required]),
    confirmPassword: new FormControl()
  });

  userRoles: any[] = [];

  constructor(
    private userService: UserService ,
    private route: Router ,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.loadAllUserRoles();
  }

  createAccount() {

    console.log(this.registrationForm.value);

    const userData = {
      userName: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      phoneNumber: this.registrationForm.value.contactNumber,
      role: {
        id: this.registrationForm.value.userType,
      }
    };

    this.userService.createUser(userData).subscribe(responseData => {
      this.response = JSON.parse(JSON.stringify(responseData));
      if (this.response.status) {
        this.toast.success(this.response.message , 'Success !');
        this.route.navigateByUrl('/verify');
      } else {
        this.toast.error(this.response.message , 'Failed');
      }
    });
  }

  loadAllUserRoles () {
    this.userService.loadAllUserRoles().subscribe(response => {
        this.userRoles = response.objects;
    });
  }

}
