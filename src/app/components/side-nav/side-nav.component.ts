import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() items: Object[];
  constructor() { }

  ngOnInit() {

    this.items = [
      {
        type: 'menu',
        label: 'Profile',
        route: '/profile',
        icon: 'fa fa-th-large'
      },
      {
        type: 'submenu',
        label: 'Organization_Activities',
        route: '#',
        icon: 'fa fa-home',
        submenu: [
          {
            type: 'menu',
            label: 'Vehicle',
            route: '/vehicle',
            icon: 'fa fa-home'
          },
          {
            type: 'menu',
            label: 'Device',
            route: '/oa/devices',
            icon: 'fa fa-home'
          },
          {
            type: 'menu',
            label: 'Agent',
            route: '/oa/agents',
            icon: 'fa fa-home'
          },
          {
            type: 'menu',
            label: 'Customer',
            route: '/oa/customers',
            icon: 'fa fa-home'
          },
          {
            type: 'menu',
            label: 'Staff',
            route: '/oa/staffs',
            icon: 'fa fa-home'
          }
        ]
      },
      {
        type: 'submenu',
        label: 'Tasks_Management',
        route: '#',
        icon: 'fa fa-bar-chart',
        submenu: [
          {
            type: 'submenu',
            label: 'Collection_Schedules',
            route: '/create-schedule',
            icon: 'fa fa-home'
          }
        ]
      },
      {
        type: 'submenu',
        label: 'User_Management',
        route: '#',
        icon: 'fa fa-envelope',
        submenu: [
          {
            type: 'menu',
            label: 'User Permissions',
            route: '/home/permissions',
            icon: 'fa fa-envelope',
          },
          {
            type: 'menu',
            label: 'Add New User',
            route: '/home/add-user',
            icon: 'fa fa-envelope',
          },
          {
            type: 'menu',
            label: 'All Users',
            route: '/home/all-users',
            icon: 'fa fa-envelope',
          }
        ]
      },
      {
        type: 'submenu',
        label: 'Location',
        route: '#',
        icon: 'fa fa-map',
        submenu: [
          {
            type: 'menu',
            label: 'My Location',
            route: '/home/location',
            icon: 'fa fa-map'
          },
          {
            type: 'menu',
            label: 'Vehicle Location',
            route: '/home/location',
            icon: 'fa fa-map'
          }
        ]
      },
      {
        type: 'submenu',
        label: 'Settings',
        route: '#',
        icon: 'fa fa-map',
        submenu: [
          {
            type: 'menu',
            label: 'Agent Registration',
            route: '/home/location',
            icon: 'fa fa-map'
          },
          {
            type: 'menu',
            label: 'Device Registration',
            route: '/home/location',
            icon: 'fa fa-map'
          },
          {
            type: 'menu',
            label: 'Vehicle Registration',
            route: '/home/location',
            icon: 'fa fa-map'
          }
        ]
      },
      {
        type: 'submenu',
        label: 'Registration',
        route: '#',
        icon: 'fa fa-map',
        submenu: [
          {
            type: 'menu',
            label: 'Personal Details',
            route: '/registration/personal-details',
            icon: 'fa fa-map'
          },
          {
            type: 'menu',
            label: 'Organization Details',
            route: '/registration/organization-details',
            icon: 'fa fa-map'
          },
          {
            type: 'menu',
            label: 'Organization Properties',
            route: '/registration/organization-properties',
            icon: 'fa fa-map'
          },
          {
            type: 'menu',
            label: 'Registration Finalize',
            route: '/registration/finalize',
            icon: 'fa fa-map'
          }
        ]
      },
      // {
      //   type: 'menu',
      //   label: 'Camera',
      //   route: '/home/camera',
      //   icon: 'fa fa-camera'
      // }
      {
        type: 'menu',
        label: 'Device Management',
        route: '/device/add',
        icon: 'fa fa-mobile'
      }
    ];
  }

}
