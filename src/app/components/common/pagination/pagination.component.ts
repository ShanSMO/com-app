import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() recordCount;
  @Input() recordsPerPage;
  @Input() currentPage;
  @Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();

  start = 0;
  end = 5;
  pages: number[] = [];

  constructor() {
    console.log('------------ loading pagination ---------');
  }

  ngOnInit() {
    for (let index = 1; index < (this.recordCount / this.recordsPerPage) + 1  ; index ++) {
      this.pages.push(index);
    }
  }

  goToEnd() {
    this.end = (this.recordCount / this.recordsPerPage);
    this.start = (this.recordCount / this.recordsPerPage) - 5;
  }

  goToStart() {
    this.end = 5;
    this.start = 0;
  }

  goToNext() {
    if (this.end < (this.recordCount / this.recordsPerPage)) {
      this.start = this.start + 1;
      this.end = this.end + 1 ;
    }
  }

  goToBack() {
    if (this.start > 0) {
      this.start = this.start - 1;
      this.end = this.end - 1 ;
    }
  }

  selectPage(pageNumber) {
    $('.page-link').remove('active-page');
    this.pageNumber.emit(pageNumber);
  }
}
