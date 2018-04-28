import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopoverModule} from '../components/common/popover/popover.module';
import {PopoverComponent} from '../components/common/popover/popover.component';
import {AngularLoaderModule} from '../components/common/angular-loader/angular-loader.module';
import {AngularToasterModule} from '../components/common/angular-toaster/angular-toaster.module';
import {SearchModule} from '../components/common/search/search.module';
import {LocationComponent} from '../components/location/location.component';
import {ImageCropperCommonModule} from 'app/components/common/image-cropper/image-cropper.module';
import {ModalPopupModule} from '../components/common/modal-popup/modal-popup.module';
import {TableModule} from "../components/common/table/table.module";
import {PaginationModule} from "../components/common/pagination/pagination.module";
import {StrengthIndicatorModule} from "../components/common/strength-indicator/strength-indicator.module";

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    AngularLoaderModule,
    AngularToasterModule,
    SearchModule,
    ImageCropperCommonModule,
    ModalPopupModule,
    PaginationModule,
    StrengthIndicatorModule,
  ],
  declarations: [
    PopoverComponent,
    LocationComponent
  ],
  exports: [
    PopoverComponent,
    AngularToasterModule,
    AngularLoaderModule,
    SearchModule,
    LocationComponent,
    ImageCropperCommonModule,
    ModalPopupModule,
    PaginationModule,
    StrengthIndicatorModule,
  ]
})
export class SharedModule { }
