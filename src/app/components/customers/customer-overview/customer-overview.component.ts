import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  customerCreateView() {
    this.route.navigateByUrl('/create-customer');
  }

}
