import { Component, OnInit, Input, HostBinding, ViewEncapsulation, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent implements OnInit {
  /** 给宿主绑定类 */
  @HostBinding('class.g-page-header') true;
  // 标题
  @Input() heading: string;
  /** 获取插入的模块 */
  @ContentChild('content') content: TemplateRef<any>;
  @ContentChild('extra') extra: TemplateRef<any>;
  @ContentChild('other') other: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
