import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-list-item-content',
  templateUrl: './list-item-content.component.html',
  styleUrls: ['./list-item-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemContentComponent implements OnInit {
  @HostBinding('class.sim-list-item-content') true;
  constructor() { }

  ngOnInit() {
  }

}
