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
  EventEmitter
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
    trigger('fadeAnimation', [
      state('*', style({ opacity: 1 })),
      transition('* => void', [
        animate(150, style({ opacity: 0, display: 'none' }))
      ]),
      transition('void => *', [
        style({ opacity: '0' }),
        animate(150, style({ opacity: 1 }))
      ])
    ]),
    trigger('expandAnimation', [
      transition('expand => void', [
        style({ height: '*', overflow: 'hidden' }),
        animate(150, style({ height: 0 }))
      ]),
      transition('void => expand', [
        style({ height: 0, overflow: 'hidden' }),
        animate(150, style({ height: '*' }))
      ])
    ])
  ],
})
export class SubMenuComponent implements OnInit, OnDestroy, AfterViewInit {
  level = 1;

  $mouseSubject = new Subject();
  // AfterContent钩子所关心的是ContentChildren，这些子组件被Angular投影进该组件中。
  // 获取子菜单集合
  @ContentChildren(SubMenuComponent) subMenus;

  @Input() open = false;

  @Output() onOpenChange: EventEmitter<boolean> = new EventEmitter();


  /**
   * 动画状态
   */
  get expandState() {
    if (this.open && this.menu.mode !== 'vertical') {
      return 'expand';
    }
    return null;
  }

  /**
   * 绑定类
   */
  @HostBinding('class.menu-submenu')
  get _setSubMenuClass() {
    return true;
  }

  @HostBinding('class.menu-submenu-open')
  get _setMenuSubmenuOpenClass() {
    return this.open;
  }

  @HostBinding('class.menu-submenu-vertical')
  get _setMenuVerticalClass() {
    return this.menu.mode === 'vertical';
  }

  @HostBinding('class.menu-submenu-horizontal')
  get _setMenuHorizontalClass() {
    return this.menu.mode === 'horizontal';
  }

  @HostBinding('class.menu-submenu-inline')
  get _setMenuInlineClass() {
    return this.menu.mode === 'inline';
  }

  constructor(private menu: MenuComponent) {
    this.menu.setHasSubMenu(true);
    this.menu.subMenus.push(this);
  }

  ngOnInit() {
    debounceTime.call(this.$mouseSubject, 300).subscribe((data: boolean) => {
      this.open = data;
    });
  }

  ngOnDestroy() {
    // 组件销毁取消订阅，防止内存泄漏
    if (this.$mouseSubject) {
      this.$mouseSubject.unsubscribe();
    }
  }

  ngAfterViewInit() {
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
    this.open = !this.open;
    // 发射出去给父组件使用
    this.onOpenChange.emit(this.open);
  }

  // 鼠标离开
  onMouseLeaveEvent() {
    // 只有在菜单收起时才能使用鼠标离开
    if ((this.menu.mode === 'horizontal') || (this.menu.mode === 'vertical')) {
      this.$mouseSubject.next(false);
    }
  }

  // 鼠标移入
  onMouseEnterEvent() {
    // 只有在菜单收起时才能使用鼠标移入
    if ((this.menu.mode === 'horizontal') || (this.menu.mode === 'vertical')) {
      this.$mouseSubject.next(true);
    }
  }

}
