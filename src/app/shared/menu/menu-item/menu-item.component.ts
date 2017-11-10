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
  selector: '[app-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemComponent {
  _selected: boolean;
  _padding = 0;
  @Input() disabled = false;
  @Input()
  set selected(value: boolean) {
    this._selected = value;
    if (value) {
      this._renderer.addClass(this.hostElement.nativeElement, 'menu-item-selected');
    } else {
      this._renderer.removeClass(this.hostElement.nativeElement, 'menu-item-selected');
    }
  }

  get selected() {
    return this._selected;
  }

  /**
   * 绑定类
   */
  @HostBinding('class.menu-item')
  get _setMenuItemClass() {
    return true;
  }

  /**
   * 绑定偏移距离
   */
  @HostBinding('style.padding-left.px')
  get setPaddingLeft() {
    if (this.subMenu) {
      /** if in sub menu component */
      if (this.menu.mode === 'inline') {
        /** if host menu's mode is inline add PADDING_BASE * level padding */
        return (this.subMenu.level + 1) * this.PADDING_BASE;
      } else {
        /** return origin padding */
        return this._padding;
      }
    } else if (this.menu.hasSubMenu && (this.menu.mode === 'inline')) {
      /** not in sub menu component but root menu's mode is inline and contains submenu return default padding*/
      return this.PADDING_BASE;
    } else {
      return this._padding;
    }
  }

  /** clear all item selected status except this */
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
      this._padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
    }
  }
}
