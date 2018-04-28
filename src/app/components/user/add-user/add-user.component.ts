import { Component, OnInit } from '@angular/core';
import {TreeviewItem} from "ngx-treeview";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  config: any;
  items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.config = {
      hasAllCheckBox: true,
      hasFilter: false,
      hasCollapseExpand: false,
      decoupleChildFromParent: false,
      maxHeight: 150
    };

    const listItem  = {
      text: 'Permissions', value: 1, children: [
        {
          text: 'User Management', value: 2 , disabled: false , children: [
          {text: 'Create User', value: 3 , checked: false},
          {text: 'Edit User', value: 4 , checked: false},
          {text: 'Block/Remove User', value: 5, checked: false},
          {text: 'Change Password', value: 5, checked: false},
          {text: 'Reset Password', value: 5, checked: false}
        ]
        }, {
          text: 'Dashboard', value: 2, checked: false
        }, {
          text: 'Location', value: 2, checked: false
        }, {
          text: 'Organization Management', value: 2, checked: false
        },
      ]
    };

    this.items.push(new TreeviewItem(listItem));

  }

  createUser() {

  }

  onSelectedChange(action) {
    console.log(action);
  }

  onFilterChange(action) {

  }

}
