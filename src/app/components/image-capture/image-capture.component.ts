import { Component, OnInit } from '@angular/core';
import {WebCamComponent} from 'ack-angular-webcam';

@Component({
  selector: 'app-image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss']
})
export class ImageCaptureComponent implements OnInit {

  // webcam: WebCamComponent;
  // base64;

  constructor() { }

  ngOnInit() {
  }

  // genBase64() {
  //   this.webcam.getBase64()
  //     .then( base => this.base64 = base)
  //     .catch( e => console.error(e) );
  // }
  //
  // genPostData() {
  //   this.webcam.captureAsFormData({fileName: 'file.jpg'})
  //     .then( formData => this.postFormData(formData) )
  //     .catch( e => console.error(e) )
  // }
  //
  // postFormData(formData) {
  //   const config = {
  //     method: 'post',
  //     url: '',
  //     body: formData
  //   };
  // }


  // onCamError(err) {}
  //
  // onCamSuccess() {}

}
