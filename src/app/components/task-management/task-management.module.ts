import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSchedulesComponent } from './collection-schedules/collection-schedules.component';
import {MyDatePickerModule} from 'mydatepicker';
import { CollectionScheduleOverviewComponent } from './collection-schedule-overview/collection-schedule-overview.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    RouterModule
  ],
  declarations: [
    CollectionSchedulesComponent,
    CollectionScheduleOverviewComponent
  ]
})
export class TaskManagementModule { }
