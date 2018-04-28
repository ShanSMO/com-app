import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceAddComponent } from './device-add/device-add.component';
import {TableModule} from '../common/table/table.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    PaginationModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [DeviceAddComponent, AllDevicesComponent]
})
export class DeviceModule { }
