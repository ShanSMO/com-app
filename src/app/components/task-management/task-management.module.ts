import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSchedulesComponent } from './collection-schedules/collection-schedules.component';
import {MyDatePickerModule} from 'mydatepicker';
import { CollectionScheduleOverviewComponent } from './collection-schedule-overview/collection-schedule-overview.component';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule
  ],
  declarations: [
    CollectionSchedulesComponent,
    CollectionScheduleOverviewComponent
  ]
})
export class TaskManagementModule { }
