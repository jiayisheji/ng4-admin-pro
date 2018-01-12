import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-page-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./page-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageContentComponent {
  @HostBinding('class.g-page-content') true;
}
