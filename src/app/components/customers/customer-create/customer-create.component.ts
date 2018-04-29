import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../../../Utils/local-storage';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem(LocalStorage.VIEW_TITLE, 'Customer Create');
  }

}
