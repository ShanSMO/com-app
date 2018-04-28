import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.css']
})
export class UserPermissionsComponent implements OnInit {

  permissionSet: any[];

  constructor() { }

  ngOnInit() {
    this.permissionSet = [
      {
        name: 'Settings',
        id: 'p_setting'
      },
      {
        name: 'Task Management',
        id: 'p_task_management'
      },
      {
        name: 'Settings',
        id: 'p_setting1'
      },
      {
        name: 'Settings',
        id: 'p_setting2'
      },
      {
        name: 'Settings',
        id: 'p_setting3'
      },
    ];
  }

}
