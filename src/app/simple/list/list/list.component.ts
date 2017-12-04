import { Component, OnInit, ViewEncapsulation, HostBinding, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  @Input() loading: boolean;
  @Input() split: boolean;
  @Input() dataSource: Array<any> = [];
  @HostBinding('class.sim-list') true;
  @HostBinding('class.sim-list-split') function() {
    return this.split;
  }

  constructor() { }

  ngOnInit() {
  }

}
