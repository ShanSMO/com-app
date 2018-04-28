import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.navigateByUrl('/app/add-user')
    $(function () {
      $('[data-toggle="popover"]').popover()
    });

    $('.popover-dismiss').popover({
      trigger: 'focus'
    });

    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });

  }
}
