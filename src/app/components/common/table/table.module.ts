import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './table.component';
import {SharedModule} from '../../../shared/shared.module';
import {PaginationModule} from '../pagination/pagination.module';
import {DropDownModule} from '../drop-down/drop-down.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule,
    DropDownModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
