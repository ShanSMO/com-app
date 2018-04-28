import { Component, OnInit } from '@angular/core';
import {Default} from '../../../Utils/default';

@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.scss']
})
export class AllDevicesComponent implements OnInit {

  dataList: any[] = [];
  tableHeaders: any[] = [];
  totalRecords: number;
  recordsPerPage = Default.RECORDS_PER_PAGE;
  currentPage = Default.CURRENT_PAGE;
  actions: any[];

  constructor() { }

  ngOnInit() {
    this.tableHeaders = [
      {name: 'Id', isVisible: true},
      {name: 'Device Type', isVisible: true},
      {name: 'IMEI', isVisible: true},
      {name: 'Added Date', isVisible: true}
    ];

    this.actions = [
      { label: 'View', path: '/home/permissions'},
      { label: 'Delete', path: '/home/add-user'},
      { label: 'Edit', path: '/home/master'}
    ];

    this.dataList = [
      [1, 'Samsung', '2554588-2254-000125', '2018-12-12'],
      [2, 'LG', '2554588-2254-000125', '2018-12-12'],
      [3, 'Sony', '2554588-2254-000125', '2018-12-12'],
      [4, 'Apple', '2554588-2254-000125', '2018-12-12'],
      [5, 'Huawei', '2554588-2254-000125', '2018-12-12']
    ];
  }

  getPage(event) {

  }

  getSelectedAction(event) {
    console.log(event);
    if (event.action === 'View') {
      this.view(event.object[0]);
    }
  }

  view(id) {
    console.log('View id' + id);
  }

}
