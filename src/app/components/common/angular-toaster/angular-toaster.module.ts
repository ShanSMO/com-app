import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularToasterComponent} from './angular-toaster.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularToasterComponent],
  exports: [AngularToasterComponent]
})
export class AngularToasterModule { }
