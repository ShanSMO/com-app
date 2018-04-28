import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlankLayoutComponent} from './blank-layout/blank-layout.component';
import {routers} from '../../router';
import {RouterModule} from '@angular/router';
import {CommonLayoutComponent} from './common-layout.component';
import {SideNavComponent} from '../side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  declarations: [
    BlankLayoutComponent,
    CommonLayoutComponent,
    SideNavComponent
  ],
  exports: [
    BlankLayoutComponent,
    CommonLayoutComponent
  ]
})
export class LayoutsModule { }
