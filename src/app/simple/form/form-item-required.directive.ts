import { Directive, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[simFormItemRequired],[sim-form-item-required]'
})
export class FormItemRequiredDirective {
  @HostBinding('class.sim-form-item-required') true;
  constructor() { }

}
