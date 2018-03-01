import { Directive, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[simFormItem],[sim-form-item]'
})
export class FormItemDirective {
  @HostBinding('class.sim-form-item') true;
  constructor() { }

}
