import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CustomerOverviewComponent,
    CustomerCreateComponent
  ]
})
export class CustomersModule { }
