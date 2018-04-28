import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleLayoutComponent } from './vehicle-layout/vehicle-layout.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CreateVehicleComponent,
    VehicleListComponent,
    UpdateVehicleComponent,
    VehicleLayoutComponent
  ],
  exports: [
    CreateVehicleComponent,
    VehicleListComponent,
    UpdateVehicleComponent
  ]
})
export class VehicleModule { }
