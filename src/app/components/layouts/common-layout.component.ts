import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorage} from '../../Utils/local-storage';
declare let jQuery: any;
declare let $: any;

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit, OnChanges {


  languages: object[] = [];
  loggedInUser: string;
  viewTitle: string;

  constructor(private translate: TranslateService,
              private router: Router,
              private activatedRute: ActivatedRoute) {
    translate.addLangs(['en', 'ar', 'si' , 'ta']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();

    // for Drop down menu
    this.languages = [
      {name: 'English', value: 'en'},
      {name: 'Sinhala ( සිංහල )', value: 'si'},
      {name: 'Tamil ( தமிழ் )', value: 'ta'},
      {name: 'Arabic ( عربى)', value: 'ar'}
    ];

    translate.use(browserLang.match(/en|ar|si|ta/) ? browserLang : 'en');

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass(['active']);
    });

    this.activatedRute.url.subscribe(() => {
      console.log(this.activatedRute.snapshot.firstChild.data);
    });
  }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem(LocalStorage.LS_USER_NAME);
    this.viewTitle = '';
  }

  toggleNav(): void {
    if ($('body').hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
    jQuery('body').toggleClass('mini-navbar');
    this.smoothlyMenu();
  }

  smoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
      // Hide menu in order to smoothly turn on when maximize menu
      $('#side-menu').hide();
      // For smoothly turn on menu
      setTimeout(
        function () {
          $('#side-menu').fadeIn(400);
        }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
      $('#side-menu').hide();
      setTimeout(
        function () {
          $('#side-menu').fadeIn(400);
        }, 100);
    } else {
      // Remove all inline style from jquery fadeIn function to reset menu state
      $('#side-menu').removeAttr('style');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
  }
}
