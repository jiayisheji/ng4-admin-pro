import { Component, OnInit, ViewEncapsulation, HostBinding, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  @HostBinding('class.sim-list') true;
  @HostBinding('attr.role')
  get _setListRole(){
    return 'list';
  }
  /** 自定义列表头部 */
  @ContentChild('header') header: TemplateRef<void>;
  /** 自定义列表底部 */
  @ContentChild('footer') footer: TemplateRef<void>;
  /** 自定义列表占位符特效 */
  @ContentChild('placeholder') placeholder: TemplateRef<void>;

  @Input() loading: boolean;
  // 是否展示分割线
  @Input() split: boolean = true;
  // 设置 list-item 布局, 设置成 vertical 则竖直样式显示, 默认横排
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() dataSource: Array<any> = [];
  @HostBinding('class.sim-list-split')
  get _setSplitClass() {
    return this.split;
  }
  @HostBinding('class.sim-list-horizontal')
  get _setLayoutHorizontalClass() {
    return this.layout === 'horizontal';
  }
  @HostBinding('class.sim-list-vertical')
  get _setLayoutVerticalClass() {
    return this.layout === 'vertical';
  }



  constructor() { }

  ngOnInit() {
  }

}
