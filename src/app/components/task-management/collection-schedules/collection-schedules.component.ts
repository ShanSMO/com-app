import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-collection-schedules',
  templateUrl: './collection-schedules.component.html',
  styleUrls: ['./collection-schedules.component.scss']
})
export class CollectionSchedulesComponent implements OnInit {


  myDatePickerOptions: IMyDpOptions  = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor() { }

  ngOnInit() {
  }

}
