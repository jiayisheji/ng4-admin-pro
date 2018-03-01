import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  Directive,
  ElementRef,
  Renderer2
} from '@angular/core';
/**
 *  按钮颜色
 *   default 默认的
 *   primary 主要的
 *   secondary 次要的
 *   success 成功的
 *   danger 危险的
 *   warning 危险的
 *   link 链接
 *   info 信息
 */
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'link' | 'info';

/**
 *  按钮尺寸
 *    xl  超大按钮
 *    lg  大的按钮
 *    md  中等按钮按钮
 *    sm  小的按钮（默认）
 *    xs  超小的按钮
 */
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

/**
 *  按钮轮廓
 *    default 默认无边框按钮
 *    outline 实线轮廓的按钮背景白色
 *    dashed  虚线轮廓的按钮背景白色
 */
export type ButtonBordered = 'outline' | 'dashed';

/**
 *  按钮形状
 *    circle  圆形按钮   一个按钮可以是圆形的
 *    square  正方形按钮 一个按钮可以是正方形的
 *    fluid   流体按钮  一个按钮可以占用其容器的宽度
 *    pill    胶囊按钮 一个按钮可以是胶囊形的
 */
export type ButtonShape = 'circle' | 'square' | 'block' | 'pill';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[sim-button]',
  template: '<i class="icon-spin icon-loading" *ngIf="loading"></i><ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class ButtonComponent {
  _el: HTMLElement;
  _classList: Array<string> = [];
  _loading: boolean;
  _prefixClass = 'sim-btn';

  // 设置颜色
  _color: ButtonColor;
  @Input()
  get color(): ButtonColor {
    return this._color;
  }
  set color(value: ButtonColor) {
    this._color = value;
    this._setClassMap();
  }

  // 设置大小
  _size: ButtonSize;
  @Input()
  get size(): ButtonSize {
    return this._size;
  }
  set size(value: ButtonSize) {
    this._size = value;
    this._setClassMap();
  }

  // 设置轮廓
  _bordered: ButtonShape;
  @Input()
  get bordered(): ButtonShape {
    return this._bordered;
  }
  set bordered(value: ButtonShape) {
    this._bordered = value;
    this._setClassMap();
  }

  // 设置形状
  _shape: ButtonShape;
  @Input()
  get shape(): ButtonShape {
    return this._shape;
  }
  set shape(value: ButtonShape) {
    this._shape = value;
    this._setClassMap();
  }

  @Input()
  set loading(value: boolean) {
    this._loading = Boolean(value);
    this._setClassMap();
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    // 设置初始化默认样式
    // 默认color default
    // 默认size  sm
    [this._prefixClass, `${this._prefixClass}-default`, `${this._prefixClass}-sm`].forEach(item => {
      this._renderer.addClass(this._el, item);
    });
  }

  private _setClassMap() {
    if (this.color && this.color !== 'default') {
      this._renderer.removeClass(this._el, `${this._prefixClass}-default`);
    }
    if (this.size && this.size !== 'sm') {
      this._renderer.removeClass(this._el, `${this._prefixClass}-sm`);
    }
    this._classList.forEach(_className => {
      this._renderer.removeClass(this._el, _className);
    });
    this._classList = [
      this.color && `${this._prefixClass}-${this.color}`,
      this.size && `${this._prefixClass}-${this.size}`,
      this.loading && `${this._prefixClass}-loading`,
      this.bordered && `${this._prefixClass}-${this.bordered}`,
      this.shape && `${this._prefixClass}-${this.shape}`,
    ].filter(item => !!item);
    this._classList.forEach(item => {
      this._renderer.addClass(this._el, item);
    });
  }

}
