import { Component, OnInit } from '@angular/core';
import {Default} from '../../../Utils/default';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

  deviceAddForm: FormGroup = new FormGroup({
    deviceModel: new FormControl(),
    imei: new FormControl(),
    date: new FormControl()
  });
  constructor() { }

  ngOnInit() {

  }

  saveDevice() {

  }

  addNewItem() {

  }

}
