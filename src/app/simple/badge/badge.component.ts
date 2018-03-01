import { Component, OnInit, HostBinding, Input, ContentChild, TemplateRef, ViewEncapsulation } from '@angular/core';

export type statusType = 'success' | 'processing' | 'default' | 'error' | 'warning';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent implements OnInit {
  _statusSize: any;
  @HostBinding('class.sim-badge') true;
  @ContentChild('content') content: TemplateRef<void>;
  // 上线溢出最大值 超过按99+显示
  @Input() overflowCount = 99;
  @Input() simStyle: any;
  // 是否闪动效果
  @Input() blink: boolean;
  @Input()
  set size(value: number | string) {
    // 如果字符串转数字失败，就赋值为null
    const number = parseInt((value as string), 10);
    if (!isNaN(number)) {
      if (6 > number || number > 12) {
        throw Error('size value set 6~12');
      }
      this._statusSize = {
        width: `${number}px`,
        height: `${number}px`
      };
    }
  }


  /** 状态 */
  @Input() @HostBinding('class.sim-badge-status') status: statusType;
  /** 计数 */
  _count: string | number | null;
  @Input()
  set count(value: string | number | null) {
    // 如果传进来是null就是dot
    if (value === null || value === 'null') {
      this._count = null;
      return;
    }
    // 如果字符串转数字失败，就赋值为null
    const number = parseInt((value as string), 10);
    if (isNaN(number)) {
      this._count = null;
      return;
    }
    if (number < 0) {
      this._count = 0;
    } else {
      this._count = number;
    }
  }
  get count(): string | number | null {
    return this._count;
  }
  @HostBinding('class.sim-badge-dot')
  get _setBadgeDot() {
    return this._count === null;
  }
  @HostBinding('class.sim-badge-count')
  get _setBadgeCount() {
    return this._count !== null;
  }
  constructor() { }

  ngOnInit() {
  }

}
