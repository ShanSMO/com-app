import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideClickDirective } from './outside-click.directive';
import {PopoverComponent} from "./popover.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OutsideClickDirective
  ]
})
export class PopoverModule { }
