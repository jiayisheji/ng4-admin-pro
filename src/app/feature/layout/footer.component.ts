import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  @HostBinding('class.g-layout-footer') true;
}
