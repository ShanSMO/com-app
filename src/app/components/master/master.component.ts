import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  filters: string;
  columns: string[];
  data: object[];
  isEnableActions: boolean;
  actions: string[];
  constructor() {

  }

  ngOnInit() {
    this.filters = 'Shanaka';
    this.columns = ['Name', 'Age', 'School', 'Medium'];
    this.data = [
      {dataRow: ['Shanaka', '13' , 'Ananda Sastralaya', 'English'], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Nalaka', '12', 'Ananda Sastralaya', 'English' ], canEdit: false , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: false},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true},
      {dataRow: ['Chamara', '15', 'Ananda Sastralaya', 'Tamil' ], canEdit: true , canRemove: false , canView: true}
    ];

    this.isEnableActions = true;
    this.actions = ['VIEW' , 'DELETE' , 'UPDATE'];
  }

}
