import { Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  providers: [UserService]
})
export class AllUsersComponent implements OnInit {

  dataList: any[] = [];
  tableHeaders: any[] = [];
  totalRecords: number;
  recordsPerPage = 5;
  currentPage = 1;
  actions: any[];

  constructor(private userService: UserService) {
    this.loadData(0, this.recordsPerPage);
  }

  ngOnInit() {
    this.tableHeaders = [
      {name: 'Id', isVisible: true},
      {name: 'User Name', isVisible: true},
      {name: 'Password', isVisible: false},
      {name: 'User Type', isVisible: true},
      {name: 'Phone Number', isVisible: true},
      {name: 'verification', isVisible: false},
      {name: 'actions', isVisible: false}
    ];

    this.actions = [
      { label: 'View', path: '/home/permissions'},
      { label: 'Delete', path: '/home/add-user'},
      { label: 'Edit', path: '/home/master'}
    ];
  }

  getPage(pageNumber) {
    this.currentPage = pageNumber;
    this.loadData(pageNumber - 1, this.recordsPerPage);
  }

  loadData(page , pages) {
    this.dataList = [];
    this.userService.loadAll(page , pages).subscribe(data => {
      this.totalRecords = data.recordCount;
      for (const object of data.objects) {
        const tempArray = new Array();
        for (const key in object) {
          tempArray.push(object[key]);
        }
        this.dataList.push(tempArray);
      }
    });
  }

}
