import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  view = false;

  constructor() { }

  ngOnInit() {
  }

  openPopover() {
    this.view = true;
  }

  onClickOutside(event: Object) {
    alert('out');
    this.view = !(event && event['value'] === true);
  }

}
