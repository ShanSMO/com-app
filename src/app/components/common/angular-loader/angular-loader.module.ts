import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularLoaderComponent} from './angular-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AngularLoaderComponent
  ],
  exports: [
    AngularLoaderComponent
  ]
})
export class AngularLoaderModule { }
