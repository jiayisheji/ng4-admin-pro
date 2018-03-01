import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[sim-form]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  @HostBinding('class.sim-form') true;
  constructor() { }

  ngOnInit() {
  }

}
