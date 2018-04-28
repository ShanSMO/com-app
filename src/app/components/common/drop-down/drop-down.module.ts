import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropDownComponent} from './drop-down.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DropDownComponent
  ],
  exports: [
    DropDownComponent
  ]
})
export class DropDownModule { }
