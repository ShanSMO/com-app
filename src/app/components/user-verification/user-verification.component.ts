import {Component, ElementRef, OnInit, Renderer, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss'],
  providers: [UserService]
})
export class UserVerificationComponent implements OnInit {

  verificationForm: FormGroup = new FormGroup({

  });

  constructor(
    private elementRef: ElementRef ,
    private renderer: Renderer2 ,
    private userService: UserService ,
    private route: Router,
    private toast: ToastrService) { }

  ngOnInit() {
    $('.code-box').keyup(function (event) {
      $(this).focus().next('input');
      console.log($(event).prevAll('input'));
    });

    // const elements = this.elementRef.nativeElement.querySelectorAll('.code-box');
    // console.log(elements);

  }

  gotToNextBox(event) {
    // console.log(event);

    // const element = this.elementRef.nativeElement.querySelector('.code-box');
    // if (element.value.length > 0) {
      // const next = new ElementRef(event.nextSibling);
      // next.nativeElement.focus('.code-box');
      // event.srcElement.nextElementSibling.focus('.code-box');
    }
  // }

  verifyUser() {
    const body = {
      userName: 'sdf',
      verification: '631708'
    };

    this.userService.verify(body).subscribe(response => {
      if (response.status) {
        this.toast.success(response.message, 'Success !')
        this.route.navigateByUrl('/login');
      }
    });

  }



}
