import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrengthIndicatorComponent } from './strength-indicator/strength-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StrengthIndicatorComponent
  ],
  exports: [
    StrengthIndicatorComponent
  ]
})
export class StrengthIndicatorModule { }
