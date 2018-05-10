import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-daily-summary',
  templateUrl: './daily-summary.component.html',
  styleUrls: ['./daily-summary.component.scss']
})
export class DailySummaryComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
    total: new FormControl()
  });

  itemGroupForm: FormGroup ;
  itemArray: FormArray;
  totalPrice = 0;
  totalItems = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.itemGroupForm = new FormGroup({
      itemArray : this.formBuilder.array([])
    })
  }

  addItem() {
    this.itemArray = this.itemGroupForm.get('itemArray') as FormArray;
    this.itemArray.push(this.createArrayItem(this.itemForm.value));
    this.totalPrice = this.totalPrice + Number(this.itemForm.get('total').value);
    this.totalItems = this.totalItems + Number(this.itemForm.get('qty').value);
    this.itemForm.reset();
  }

  createArrayItem(item): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(item.id),
      price: new FormControl(item.price),
      qty: new FormControl(item.qty),
      total: new FormControl(item.total)
    });
  }

  removeItem(item) {
    this.itemArray = this.itemGroupForm.get('itemArray') as FormArray;
    this.itemArray.removeAt(this.itemArray.value.indexOf(item.value));
    this.totalPrice = this.totalPrice - Number(item.get('total').value);
    this.totalItems = this.totalItems - Number(item.get('qty').value);
  }
}
