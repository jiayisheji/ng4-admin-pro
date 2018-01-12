import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

export enum searchingEnum {
  init,
  start,
  processing,
  complete
}
@Component({
  selector: 'app-header-topbar',
  templateUrl: './header-topbar.component.html',
  styleUrls: ['./header-topbar.component.scss']
})
export class HeaderTopbarComponent implements OnInit, OnDestroy {
  isSearchOpen: boolean;
  searching: searchingEnum = searchingEnum.init;
  searchForm: FormGroup;
  private _sub: Subscription;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
    const search$ = this.searchForm.get('search').valueChanges
      .debounceTime(300)
      .filter(v => v.trim()); // 过滤首尾空格
    this._sub = search$.subscribe(v => {
      // 如果是空字符串就直接返回，不做后续操作
      if (!v) {
        return;
      }
      this.querySearch(v);
    });
  }



  ngOnDestroy() {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  /**
   * 打开关闭搜索
   * @param search
   */
  openSearch(search) {
    // 如果正在搜索过程中不能关闭
    if (this.searching === searchingEnum.processing) {
      return;
    }
    this.isSearchOpen = !this.isSearchOpen;
    // 开启时候需要自动获取焦点
    if (this.isSearchOpen) {
      const timer = setTimeout(() => {
        search.focus();
        clearTimeout(timer);
      }, 20);
    } else {
      this.clearSearch();
    }
  }

  /**
   * 全局搜索处理函数
   * @param value
   */
  querySearch(value: string) {
    console.log(searchingEnum.processing);
    this.searching = searchingEnum.processing;
    setTimeout(() => {
      this.searching = searchingEnum.complete;
      console.log('搜索成功');
    }, 2000);
  }

  /**
   * 清除搜索值
   */
  clearSearch() {
    this.searchForm.patchValue({
      search: ''
    });
  }
}
