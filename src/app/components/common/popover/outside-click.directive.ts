import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[appOutsideClick]'
})

export class OutsideClickDirective implements OnInit, OnDestroy {

  private listner: boolean;
  private globalClick: Subscription;

  @Output('clickOutside') clickOutside: EventEmitter<Object>;

  constructor(private _eleRef: ElementRef) {
    this.listner = false;
    this.clickOutside = new  EventEmitter();
  }

  ngOnInit(): void {
    alert();
    this.globalClick = Observable.fromEvent(document, 'click').delay(1).do(() => {
        this.listner = true;
    }).subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
    });
  }

  ngOnDestroy() {
    this.globalClick.unsubscribe();
  }

  onGlobalClick(event: MouseEvent) {
      if (event instanceof MouseEvent && this.listner) {
        if (this.isDescendant(this._eleRef.nativeElement, event.target) === true) {
          this.clickOutside.emit({
            target: (event.target || null),
            value: false
          });
        } else {
          this.clickOutside.emit({
            target: (event.target || null),
            value: true
          });
        }
      }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      }else {
        node = node.parentNode;
      }
    }
    return false;
  }

}
