import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BusinessRegistrationComponent} from './business-registration.component';
import {RouterModule} from '@angular/router';
import { OrganizationPropertyComponent } from './organization-property/organization-property.component';
import { RegistrationFinalizeComponent } from './registration-finalize/registration-finalize.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    OrganizationDetailsComponent,
    PersonalDetailsComponent,
    BusinessRegistrationComponent,
    OrganizationPropertyComponent,
    RegistrationFinalizeComponent
  ],
  exports: [ ]
})
export class BusinessRegistrationModule { }
