import { Component, OnInit, OnDestroy, HostBinding, Optional } from '@angular/core';
import { FormItemComponent } from './form-item/form-item.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-form-explain',
  template: '<ng-content></ng-content>'
})
export class FormExplainComponent  {
  @HostBinding('class.sim-form-explain') true;
}
