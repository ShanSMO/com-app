import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSchedulesComponent } from './collection-schedules/collection-schedules.component';
import {MyDatePickerModule} from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule
  ],
  declarations: [
    CollectionSchedulesComponent
  ]
})
export class TaskManagementModule { }
