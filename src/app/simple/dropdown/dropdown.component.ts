import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnDestroy,
  AfterViewInit,
  ContentChild,
  HostBinding
} from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { MenuComponent } from '../menu/menu.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    // dropDownAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class.sim-dropdown') true;
  _subscription: Subscription;
  @ContentChild(DropdownDirective) _nzOrigin;
  @ContentChild(MenuComponent) _menu;
  constructor() { }

  ngOnInit(): void {
    if (this._menu) {
      this._menu.setDropDown(true);
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    /* let mouse$: Observable<boolean>;
    if (this.nzTrigger === 'hover') {
      const mouseEnterOrigin$ = fromEvent(this._nzOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo(true));
      const mouseLeaveOrigin$ = fromEvent(this._nzOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo(false));
      mouse$ = mouseEnterOrigin$.pipe(merge(mouseLeaveOrigin$));
    }
    if (this.nzTrigger === 'click') {
      mouse$ = fromEvent(this._nzOrigin.elementRef.nativeElement, 'click').pipe(mapTo(true));
      this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'click', (e) => {
        e.preventDefault();
      });
    }
    const observable$ = mouse$.pipe(merge(this._visibleChange));
    this._startSubscribe(observable$); */
  }

}
