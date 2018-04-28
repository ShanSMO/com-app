import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CompanyService} from '../../../services/company.service';
import {ToastrService} from 'ngx-toastr';
import {LocalStorage} from "../../../Utils/local-storage";

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss'],
  providers: [CompanyService]
})
export class OrganizationDetailsComponent implements OnInit {

  logoImage: any = '../../../assets/images/logo.png';
  mapRequestType: any = 'LOCATION';
  companyLocation: any = {
    latitude: null,
    longitude: null
  };

  organizationForm: FormGroup = new FormGroup({
    orgName: new FormControl(),
    mobileNumber: new FormControl(),
    fixedNumber: new FormControl(),
    houseNumber: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    postalCode: new FormControl()
  });

  constructor(
    private route: Router ,
    private companyService: CompanyService,
    private toast: ToastrService) {
  }

  ngOnInit() {
  }

  saveCompanyBasicDetails() {
    const companyData = {
      companyName: this.organizationForm.value.orgName,
      mobileNumber: this.organizationForm.value.mobileNumber,
      fixedNumber: this.organizationForm.value.fixedNumber,
      postalCode: this.organizationForm.value.postalCode,
      email: localStorage.getItem(LocalStorage.LS_USER_NAME),
      latitude: this.companyLocation.latitude,
      longitude: this.companyLocation.longitude,
      address: {
        houseNumber: this.organizationForm.value.houseNumber,
        street: this.organizationForm.value.street,
        city: this.organizationForm.value.city,
        zipCode: this.organizationForm.value.postalCode
      },
      owner: {
        id: localStorage.getItem(LocalStorage.LS_USER_ID)
      }
    };
    this.companyService.createCompany(companyData).subscribe(response => {
      if (response.status) {
        this.route.navigateByUrl('/finalize');
        this.toast.success('Successfully registered the company , please log into your account', 'Success !');
        localStorage.removeItem('user_name');
      }else {
        this.toast.error(response.message, 'Failed');
      }
    });
  }

  getLocation(location) {
    const latLang = JSON.parse(JSON.stringify(location));
    this.companyLocation.latitude = latLang.lat;
    this.companyLocation.longitude = latLang.lng;
  }

  getImage(image) {
    this.logoImage = image;
  }
}
