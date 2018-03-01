import { Component, OnInit, HostBinding, ContentChild, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-list-item-meta',
  templateUrl: './list-item-meta.component.html',
  styleUrls: ['./list-item-meta.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemMetaComponent implements OnInit {
  @HostBinding('class.sim-list-item-meta') true;
  // 列表元素的图标
  @ContentChild('avatar') avatar: TemplateRef<void>;
  // 列表元素的标题
  @ContentChild('title') title: TemplateRef<void>;
  // 列表元素的描述内容
  @ContentChild('description') description: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }

}
