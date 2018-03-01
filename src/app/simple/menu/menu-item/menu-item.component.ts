import {
  Component,
  AfterViewInit,
  ViewEncapsulation,
  Input,
  HostBinding,
  Renderer2,
  Optional,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { MenuComponent } from '../menu.component';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';
import { Inject, HostListener } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[sim-menu-item]',
  template: '<ng-content></ng-content>',
  // styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemComponent implements AfterViewInit {
  // 禁用
  private _disabled = false;
  // 选中
  private _selected = false;
  // 层级
  level = 0;
  // 左填充
  padding = null;
  // 是否下拉
  isInDropDown = false;

  @Input()
  set disabled(value: boolean) {
    this._disabled = Boolean(value);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set selected(value: boolean) {
    this._selected = Boolean(value);
    const dropDownClass = this.isInDropDown ? 'dropdown-menu-item-selected' : 'menu-item-selected';
    if (this._selected) {
      this._renderer.addClass(this.hostElement.nativeElement, dropDownClass);
    } else {
      this._renderer.removeClass(this.hostElement.nativeElement, dropDownClass);
    }
  }

  get selected(): boolean {
    return this._selected;
  }

  /** 给宿主绑定类 */
  @HostBinding('class.menu-item')
  get _setMenuItemClass() {
    return !this.isInDropDown;
  }

  /** 给宿主绑定类 */
  @HostBinding('class.dropdown-menu-item')
  get _isInDropDownClass(): boolean {
    return this.isInDropDown;
  }

  /** 给宿主绑定禁止类 */
  @HostBinding('class.dropdown-menu-item-disabled')
  get setDropDownDisableClass(): boolean {
    return this.isInDropDown && this.disabled;
  }

  /** 给宿主绑定禁止类 */
  @HostBinding('class.menu-item-disabled')
  get setMenuDisableClass(): boolean {
    return (!this.isInDropDown) && this.disabled;
  }

  /**
   * 绑定偏移距离
   */
  @HostBinding('style.padding-left.px')
  get setPaddingLeft() {
    if (this.subMenu) {
      /** 如果在子菜单组件中 */
      if (this.menu.mode === 'inline') {
        /** 如果主机菜单的模式是内联的添加 PADDING_BASE*level 填充 */
        return (this.subMenu.level + 1) * this.PADDING_BASE;
      } else {
        /** 返回原点填充 */
        return this.padding;
      }
    } else if (this.menu.hasSubMenu && (this.menu.mode === 'inline')) {
      /** 不在子菜单组件中，但根菜单模式是内联的，包含子菜单返回默认填充 */
      return this.PADDING_BASE;
    } else {
      return this.padding;
    }
  }

  /** 清除除此之外的所有项目选定状态 */
  @HostListener('click', ['$event'])
  _onClickItem() {
    if (this.menu.clickActive && (!this.disabled)) {
      this.menu.clearAllSelected();
      this.selected = true;
    }
  }

  constructor(
    private menu: MenuComponent,
    private _renderer: Renderer2,
    public cd: ChangeDetectorRef,
    private hostElement: ElementRef,
    @Optional() private subMenu: SubMenuComponent,
    @Inject('MENU_CONFIG_PADDING') private PADDING_BASE
  ) {
    this.menu.menuItems.push(this);
    if (this.hostElement.nativeElement.style['padding-left']) {
      this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(_ => {
      this.isInDropDown = this.menu.isInDropDown;
    });
  }
}
