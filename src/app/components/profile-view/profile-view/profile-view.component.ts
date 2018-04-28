import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  mainFormObject: FormGroup;

  brandAndValueArrObject: any[] = [
    {
      brand: {
        id: 1,
        label: 'Laptop',
        value: [
          {id: 1, label: 'Hp'},
          {id: 2, label: 'Dell'},
          {id: 3, label: 'Acer'}
        ]
      }
    }, {
      brand: {
        id: 2, label: 'Desktop',
        value: [
          {id: 1, label: 'Hp'},
          {id: 2, label: 'Dell'},
          {id: 3, label: 'Acer'}
        ]
      }
    }, {
      brand: {
        id: 3, label: 'Mobile',
        value: [
          {id: 1, label: 'Samsung'},
          {id: 2, label: 'Apple'},
          {id: 3, label: 'Sony'},
          {id: 4, label: 'Huawei'},
          {id: 5, label: 'Nokia'}
        ]
      }
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainFormObject = this.formBuilder.group({
      formObjectArray: this.formBuilder.array([this.createArrayItem()])
    });
  }


  createArrayItem(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      variantObj: new FormControl()
    });
  }

}
