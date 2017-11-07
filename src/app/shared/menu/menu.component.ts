import { Component, OnInit, ViewEncapsulation, HostBinding, OnChanges, AfterViewInit, Input, Inject } from '@angular/core';

// 菜单类型 显示模式 垂直|水平|内嵌
export type menuMode = 'vertical' | 'horizontal' | 'inline';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnChanges, AfterViewInit {
  // 设置子菜单组件时
  hasSubMenu = false;
  // 是否折叠
  _inlineCollapsed = false;
  // 初始化完成
  private _init = false;
  // 保存初始化的mode类型状态
  private _tempMode: menuMode;
  /** 菜单项集合 */
  menuItems = [];
  /** 子菜单集合 */
  subMenus = [];

  /** 子菜单关闭之前信息 */
  private _historyClickIndexs = [];

  // 点击后是否选中子菜单
  @Input() clickActive = true;
  // 菜单类型
  @Input() mode: menuMode = 'vertical';
  // 设置展开收起
  @Input()
  get inlineCollapsed() {
    return this._inlineCollapsed;
  }

  set inlineCollapsed(value: boolean) {
    this._inlineCollapsed = value;
    if (!this._init) {
      return;
    }
    if (this._inlineCollapsed) {
      this.hideSubMenus();
      // 动画结束后
      setTimeout(() => {
        this.mode = 'vertical';
      }, 150);
    } else {
      this.reappearSubMenus();
      this.mode = this._tempMode;
    }
  }

  /**
   * 隐藏子菜单
   */
  hideSubMenus() {
    // 每次关闭子菜单之前先清空 历史信息
    this._historyClickIndexs = [];
    this.subMenus.forEach((submenu, index) => {
      if (submenu.open) {
        this._historyClickIndexs.push(index);
      }
      submenu.open = false;
    });
  }

  /**
   * 关闭之前的子菜单
   */
  reappearSubMenus() {
    this._historyClickIndexs.forEach(i => this.subMenus[i].open = true);
    this._historyClickIndexs = [];
  }






  /* @HostBinding('class.dropdown-menu')
  @HostBinding('class.menu-dropdown-vertical')
  @HostBinding('class.dropdown-menu-root')
  get _isInDropDownClass() {
    return true;
  } */


  @HostBinding('class.m-menu')
  @HostBinding('class.menu-root')
  get _setMenuClass() {
    return true;
  }


  @HostBinding('class.menu-inline-collapsed')
  @HostBinding('class.menu-vertical')
  get _setInlineCollapsedClass() {
    return this._inlineCollapsed;
  }

  @HostBinding('class.menu-horizontal')
  get _setMenuHorizontalClass() {
    return this.mode === 'horizontal';
  }

  @HostBinding('class.menu-inline')
  get _setMenuInlineClass() {
    return this.mode === 'inline';
  }

  constructor() {
  }

  // 当Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的SimpleChanges对象
  // 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
  ngOnChanges() {

  }

  // 初始化完组件视图及其子视图之后调用。第一次ngAfterContentChecked()之后调用，只调用一次。
  ngAfterViewInit() {
    // 初始化完成
    this._init = true;
    // 保存给临时变量，备用
    this._tempMode = this.mode;
  }

  /** 点击菜单项时候触发 */
  clearAllSelected() {
    this.menuItems.forEach(menu => menu.selected = false);
  }

  /**
   * 设置子菜单
   * @param value
   */
  setHasSubMenu(value: boolean) {
    setTimeout(_ => {
      this.hasSubMenu = value;
    }, 0);
  }

}
