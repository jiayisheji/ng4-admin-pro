import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent {
  @HostBinding('class.g-layout-content') true;
}
