import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ContentChildren,
  OnDestroy,
  AfterViewInit,
  HostBinding,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { MenuComponent } from '../menu.component';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[sim-sub-menu]',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('expandAnimation', [
      state('fade', style({ opacity: 1 })),
      transition('expand => void', [
        style({ height: '*', overflow: 'hidden' }),
        animate(150, style({ height: 0 }))
      ]),
      transition('void => expand', [
        style({ height: 0, overflow: 'hidden' }),
        animate(150, style({ height: '*' }))
      ]),
      transition('fade => void', [
        animate(150, style({ opacity: 0 }))
      ]),
      transition('void => fade', [
        style({ opacity: '0' }),
        animate(150, style({ opacity: 1 }))
      ])
    ])
  ],
})
export class SubMenuComponent implements OnInit, OnDestroy, AfterViewInit {
  private _open = false;
  isInDropDown = false;
  level = 1;

  $mouseSubject = new Subject();
  // AfterContent钩子所关心的是ContentChildren，这些子组件被Angular投影进该组件中。
  // 获取子菜单集合
  @ContentChildren(SubMenuComponent) subMenus;

  @Input()
  @Input()
  set onOpen(value: boolean) {
    this._open = Boolean(value);
  }

  get onOpen(): boolean {
    return this._open;
  }

  @Output() onOpenChange: EventEmitter<boolean> = new EventEmitter();

  // 获取子菜单项是否选中
  get subItemSelected(): boolean {
    return !!this.menu.menuItems.find(e => e.nzSelected && e.nzSubMenuComponent === this);
  }
  // 获取子菜单是否选中
  get submenuSelected(): boolean {
    return !!this.subMenus._results.find(e => e !== this && e.subItemSelected);
  }

  /**
   * 动画状态
   */
  get expandState() {
    if (this.onOpen && this.menu.mode === 'inline') {
      return 'expand';
    } else if (this.onOpen && this.menu.mode !== 'inline') {
      return 'fade';
    }
    return null;
  }


  /**
   * 绑定类
   */
  @HostBinding('class.dropdown-menu-submenu')
  get setDropDownSubmenuClass(): boolean {
    return this.isInDropDown;
  }

  @HostBinding('class.menu-submenu-open')
  get setMenuSubmenuOpenClass(): boolean {
    return (!this.isInDropDown) && (this.onOpen);
  }

  @HostBinding('class.dropdown-menu-submenu-vertical')
  get setDropDownVerticalClass(): boolean {
    return this.isInDropDown && (this.menu.mode === 'vertical');
  }

  @HostBinding('class.dropdown-menu-submenu-horizontal')
  get setDropDownHorizontalClass(): boolean {
    return this.isInDropDown && (this.menu.mode === 'horizontal');
  }

  @HostBinding('class.menu-submenu')
  get setMenuSubmenuClass(): boolean {
    return !this.isInDropDown;
  }

  @HostBinding('class.menu-submenu-selected')
  get setMenuSubmenuSelectedClass(): boolean {
    return this.submenuSelected || this.subItemSelected;
  }

  @HostBinding('class.menu-submenu-vertical')
  get _setMenuVerticalClass() {
    return (!this.isInDropDown) && (this.menu.mode === 'vertical');
  }

  @HostBinding('class.menu-submenu-horizontal')
  get _setMenuHorizontalClass() {
    return (!this.isInDropDown) && (this.menu.mode === 'horizontal');
  }

  @HostBinding('class.menu-submenu-inline')
  get _setMenuInlineClass() {
    return (!this.isInDropDown) && (this.menu.mode === 'inline');
  }

  constructor(public menu: MenuComponent) {
    this.menu.setHasSubMenu(true);
    this.menu.subMenus.push(this);
  }

  ngOnInit() {
    debounceTime.call(this.$mouseSubject, 300).subscribe((data: boolean) => {
      if (this.onOpen !== data) {
        this.onOpen = data;
        this.onOpenChange.emit(this.onOpen);
      }
    });
  }

  ngOnDestroy() {
    // 组件销毁取消订阅，防止内存泄漏
    if (this.$mouseSubject) {
      this.$mouseSubject.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.isInDropDown = this.menu.isInDropDown;
    if (this.subMenus.length && (this.menu.mode === 'inline')) {
      this.subMenus.filter(x => x !== this).forEach(menu => {
        setTimeout(_ => {
          menu.level = this.level + 1;
        }, 0);
      });
    }
  }

  /**
   * 点击title，需要关闭其他，当前显示
   */
  clickSubMenuTitle() {
    // 如果菜单收起了，就禁止点击
    if (this.menu.mode === 'vertical') {
      return;
    }
    this.onOpen = !this.onOpen;
    // 发射出去给父组件使用
    this.onOpenChange.emit(this.onOpen);
  }

  clickSubMenuDropDown(): void {
    if (this.isInDropDown || (this.menu.mode === 'vertical') || (this.menu.mode === 'horizontal')) {
      this.$mouseSubject.next(false);
      this.onOpen = false;
      this.onOpenChange.emit(this.onOpen);
    }
  }

  // 鼠标离开
  @HostListener('mouseleave', ['$event'])
  onMouseLeaveEvent(event) {
    // 只有在菜单收起时才能使用鼠标离开
    if ((this.menu.mode === 'horizontal') || (this.menu.mode === 'vertical') || this.isInDropDown) {
      this.$mouseSubject.next(false);
    }
  }

  // 鼠标移入
  @HostListener('mouseenter', ['$event'])
  onMouseEnterEvent(event) {
    // 只有在菜单收起时才能使用鼠标移入
    if ((this.menu.mode === 'horizontal') || (this.menu.mode === 'vertical') || this.isInDropDown) {
      this.$mouseSubject.next(true);
    }
  }

}
