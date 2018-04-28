import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filters: any[] = [1, 2, 3, 4];
  myDatePickerOptions: IMyDpOptions  = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor() { }

  ngOnInit() {
    this.filters = [
      {
        type: 'text',
        id: 'id1',
        name: 'id',
        placeholder: 'user id'
      },
      {
        type: 'select',
        id: 'id1',
        name: 'User Type',
        placeholder: 'user type'
      },
      {
        type: 'date',
        id: 'id1',
        name: 'Start Date',
        placeholder: 'user type'
      },
      {
        type: 'date',
        id: 'id1',
        name: 'End Date',
        placeholder: 'user type'
      }
    ];
  }

}
