import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { FormControl , FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ResponseObject} from '../../domains/response-object';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  response: ResponseObject ;
  registrationForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    userType: new FormControl('OWNER'),
    contactNumber: new FormControl(),
    confirmPassword: new FormControl()
  });

  constructor(
    private userService: UserService ,
    private route: Router ,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }

  createAccount() {

    const userData = {
      userName: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      userType: this.registrationForm.value.userType,
      phoneNumber: this.registrationForm.value.contactNumber
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


    // verify email
  }

  matchPassword(){

  }

}
