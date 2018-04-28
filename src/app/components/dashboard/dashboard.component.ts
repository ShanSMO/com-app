import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id = 'chart1';
  width = 600;
  height = 300;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource: any;
  // title = 'Angular4 FusionCharts Sample';

  constructor() {
    this.dataSource = {
      'chart': {
        'caption': 'Harry\'s SuperMart',
        'subCaption': 'Top 5 stores in last month by revenue',
        'numberprefix': '$',
        'theme': 'fint'
      },
      'data': [
        {
          'label': 'Bakersfield Central',
          'value': '880000'
        },
        {
          'label': 'Garden Groove harbour',
          'value': '730000'
        },
        {
          'label': 'Los Angeles Topanga',
          'value': '590000'
        },
        {
          'label': 'Compton-Rancho Dom',
          'value': '520000'
        },
        {
          'label': 'Daly City Serramonte',
          'value': '330000'
        }
      ]
    }
  }

  ngOnInit() {
  }

}
