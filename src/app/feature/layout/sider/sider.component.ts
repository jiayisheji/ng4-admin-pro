import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { getNavData } from '@app/shared/nav';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiderComponent implements OnInit {
  _fold: boolean;
  @Input()
  get fold() {
    return this._fold;
  }
  set fold(value: boolean) {
    this._fold = value;
    console.log('set fold: ', value);
  }
  _menu: Array<any>;
  constructor(private router: Router) {
    // 获取当前url地址和设置去匹配，如果符合就展开
    this._menu = getNavData[0].children.map(item => {
      item['_fold'] = this.router.url.includes(item.path);
      return item;
    });
  }

  ngOnInit() {
    console.log(this._fold);
    // this._menu = menu[0].children;
  }

  open($event: boolean, item) {
    this._menu.filter(m => m.name !== item.name).map(m => m._fold = false);
    item._fold = $event;
  }
}
