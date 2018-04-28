import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() popupTitle: string;
  @Output() croppedImage: EventEmitter<any> = new EventEmitter();
  resizedImage: any;
  modalCloseOption: any = '';

  constructor() { }

  ngOnInit() {
  }

  cropImage(image) {
    this.resizedImage = image;
  }

  saveImage() {
    this.croppedImage.emit(this.resizedImage);
    this.modalCloseOption = 'modal';
  }
}
