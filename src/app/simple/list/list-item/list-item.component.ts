import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, ContentChild, TemplateRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @HostBinding('class.sim-list-item') true;
  @HostBinding('attr.role')
  get _setListRole() {
    return 'listitem';
  }
  // 列表元素的图标
  @ContentChild('main') main: TemplateRef<void>;
  // 列表元素的图标
  @ContentChild('extra') extra: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }

}
