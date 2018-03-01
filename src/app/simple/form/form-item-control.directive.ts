import { Directive, HostBinding, ContentChild, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[simFormItemControl],[sim-form-item-control]'
})
export class FormItemControlDirective {
  @HostBinding('class.sim-form-item-control') true;
  private _hasFeedback = false;
  private _validateStatus: string | NgControl;
  @ContentChild(NgControl) ngControl: NgControl;

  @Input()
  set validateStatus(value: string | NgControl) {
    this._validateStatus = value;
  }

  get validateStatus(): string | NgControl {
    return this._validateStatus || this.ngControl;
  }

  @Input()
  set hasFeedback(value: boolean) {
    this._hasFeedback = Boolean(value);
  }

  get hasFeedback(): boolean {
    return this._hasFeedback;
  }

  @HostBinding('class.has-feedback')
  get isHasFeedBack(): boolean {
    return this.hasFeedback;
  }

  @HostBinding('class.has-warning')
  get isWarning(): boolean {
    return this.validateStatus === 'warning' ||
      this.validateStatus &&
      (this.validateStatus as NgControl).dirty &&
      (this.validateStatus as NgControl).hasError &&
      (this.validateStatus as NgControl).hasError('warning');
  }
  @HostBinding('class.is-validating')
  get isValidate(): boolean {
    return this.validateStatus === 'validating' ||
      this.validateStatus === 'pending' ||
      this.validateStatus &&
      (this.validateStatus as NgControl).dirty &&
      (this.validateStatus as NgControl).pending;
  }
  @HostBinding('class.has-error')
  get isError(): boolean {
    return this.validateStatus === 'error' ||
      this.validateStatus &&
      (this.validateStatus as NgControl).dirty &&
      (this.validateStatus as NgControl).errors &&
      (this.validateStatus as NgControl).hasError &&
     !(this.validateStatus as NgControl).hasError('warning');
  }
  @HostBinding('class.has-success')
  get isSuccess(): boolean {
    return this.validateStatus === 'success' ||
      this.validateStatus &&
      (this.validateStatus as NgControl).dirty &&
      (this.validateStatus as NgControl).valid;
  }
  constructor() { }

}
