import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collection-schedule-overview',
  templateUrl: './collection-schedule-overview.component.html',
  styleUrls: ['./collection-schedule-overview.component.scss']
})
export class CollectionScheduleOverviewComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  scheduleCreateView() {
    this.route.navigateByUrl('/create-schedule');
  }

}
