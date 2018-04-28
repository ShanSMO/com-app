import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-toaster',
  templateUrl: './angular-toaster.component.html',
  styleUrls: ['./angular-toaster.component.scss']
})
export class AngularToasterComponent implements OnInit {

  @Input() messageTitle: string;
  @Input() messageBody: string;
  @Input() timeOut: number;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
