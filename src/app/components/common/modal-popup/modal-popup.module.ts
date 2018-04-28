import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageModalComponent} from './image-modal/image-modal.component';
import {ImageCropperCommonModule} from '../image-cropper/image-cropper.module';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperCommonModule
  ],
  declarations: [
    ImageModalComponent
  ],
  exports: [
    ImageModalComponent
  ]
})
export class ModalPopupModule { }
