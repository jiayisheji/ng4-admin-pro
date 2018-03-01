import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  HostBinding,
  Output,
  EventEmitter,
  Optional,
  Host,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutComponent } from './layout.component';
export type BreakPoinitType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-sider',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class SiderComponent implements OnInit {
  @HostBinding('class.g-layout-sider') true;

  _dimensionMap = {
    xl: '1600px',
    lg: '1200px',
    md: '992px',
    sm: '768px',
    xs: '480px',
  };
  _collapsed: boolean;
  // 可视宽度
  @Input() visualWidth = 256;
  @Input() foldWidth = 80;
  @Input() breakpoint: BreakPoinitType;
  @Input()
  @HostBinding('class.layout-sider-collapsed')
  get collapsed(): boolean {
    return this._collapsed;
  }
  set collapsed(value: boolean) {
    this._collapsed = Boolean(value);
  }

  @Output() collapsedChange: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('style.flex')
  get setFlex(): string {
    if (this.collapsed) {
      return `0 0 ${this.foldWidth}px`;
    } else {
      return `0 0 ${this.visualWidth}px`;
    }
  }

  @HostBinding('style.width.px')
  get setStyle(): number | string {
    if (this.collapsed) {
      return this.foldWidth;
    } else {
      return this.visualWidth;
    }
  }

  /*   @HostListener('window:resize', ['$event'])
    onWindowResize(e: UIEvent): void {
      if (this.breakpoint) {
        const matchBelow = window.matchMedia(`(max-width: ${this._dimensionMap[this.breakpoint]})`).matches;
        this.collapsed = matchBelow;
        this.collapsedChange.emit(matchBelow);
      }
    } */

  constructor(@Optional() @Host() private layoutComponent: LayoutComponent) {
    if (this.layoutComponent) {
      this.layoutComponent.hasSider = true;
    }
    if (typeof window !== 'undefined') {
      const matchMediaPolyfill = (mediaQuery: string): MediaQueryList => {
        return {
          media: mediaQuery,
          matches: false,
          addListener(): void { },
          removeListener(): void { },
        };
      };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
  }

  ngOnInit(): void {
  }
}
