import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @HostBinding('class.g-layout-header') true;
}
