import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { getNavData } from '@app/config';

import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {
  @HostBinding('class.g-layout') _layout = true;
  @HostBinding('class.g-layout-has-sider') hasSider = false;
  _fold: boolean;
  _loading: boolean;
  _menu: Array<any>;
  constructor(private router: Router) {
    // 获取当前url地址和设置去匹配，如果符合就展开
    this._menu = getNavData[0].children.map(item => {
      item['_fold'] = this.router.url.includes(item.path);
      return item;
    });
  }

  ngOnInit() {
    this.router.events
      .subscribe((route) => {
        if (route instanceof NavigationStart) {
          this._loading = true;
        }
        if (route instanceof NavigationEnd) {
          this._loading = false;
        }
      });
  }

  toggleSider(event) {
    console.log(event);
    this._fold = event;
  }

}
