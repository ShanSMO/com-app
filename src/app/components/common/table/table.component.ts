import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css' ]
})
export class TableComponent implements OnInit , AfterViewInit {

  @Input() filter: string;
  @Input() headers: any[];
  @Input() dataList: any[];
  @Input() isEnableActions: boolean;
  @Input() actions: any[];
  @Input() actionType: any;

  @Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();
  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

  }

  sort(event) {
    alert(event);
  }

  ngAfterViewInit(): void {

  }

  selectedAction(event) {
    this.action.emit(event);
  }

}
