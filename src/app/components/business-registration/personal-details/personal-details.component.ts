import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BusinessOwnerService} from '../../../services/business-owner.service';
import {LocalStorage} from '../../../Utils/local-storage';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  providers: [UserService , BusinessOwnerService]
})
export class PersonalDetailsComponent implements OnInit {

  personalDetailsFrom: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    nicNumber: new FormControl(null, Validators.required),
    emailAddress: new FormControl(null, [Validators.required , Validators.email]),
    mobileNumber: new FormControl(null, [Validators.required , Validators.minLength(10)]),
    fixedNumber: new FormControl(null , Validators.minLength(10))
  });

  constructor(private userService: UserService , private route: Router , private toast: ToastrService,
              private businessOwnerService: BusinessOwnerService) { }

  ngOnInit() {
    if (localStorage.getItem(LocalStorage.LS_USER_NAME) != null) {
      const requestBody = {
        emailAddress: localStorage.getItem(LocalStorage.LS_USER_NAME)
      };
      this.businessOwnerService.loadBusinessOwnerByEmail(requestBody)
        .subscribe(data => {

          if (data.object != null) {
            this.personalDetailsFrom.setValue({
              firstName: data.object.firstName,
              lastName: data.object.lastName,
              nicNumber: data.object.nicNumber,
              emailAddress: localStorage.getItem(LocalStorage.LS_USER_NAME),
              mobileNumber: data.object.mobileNumber,
              fixedNumber: data.object.fixedNumber,
            });

            localStorage.setItem(LocalStorage.LS_USER_ID, data.object.id);
          } else {
            this.personalDetailsFrom.setValue({
              firstName: null,
              lastName: null,
              nicNumber: null,
              emailAddress: localStorage.getItem(LocalStorage.LS_USER_NAME),
              mobileNumber: null,
              fixedNumber: null,
            });
          }

      });
    }
  }

  savePersonalDetails() {
    if (this.personalDetailsFrom.valid) {
      this.userService.createProfile(this.personalDetailsFrom.value).subscribe(response => {
        if (response.status) {
          this.toast.success(response.message , 'Success ' );
          this.route.navigateByUrl('/registration/organization-details');
          localStorage.setItem('user_name', this.personalDetailsFrom.value.emailAddress);
        } else {
          this.toast.error(response.message , 'Error ' );
        }
      });
    }
  }

}
