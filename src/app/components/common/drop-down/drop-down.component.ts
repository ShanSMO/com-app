import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() options: any[];
  @Input() actionType: any;
  @Input() object: any;
  @Output() selectedAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setFunction(object, act) {
    const actionEmit = {
      action: act,
      object: object
    };
    this.selectedAction.emit(actionEmit);
  }

}
