import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ImageCropperCommonComponent} from './image-cropper.component';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  declarations: [
    ImageCropperCommonComponent
  ],
  exports: [
    ImageCropperCommonComponent
  ]
})
export class ImageCropperCommonModule { }
