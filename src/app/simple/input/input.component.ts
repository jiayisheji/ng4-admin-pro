import {
  forwardRef,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  OnInit,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import calculateNodeHeight from './calculate-node-height';
export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
})
export class InputComponent implements OnInit {
  private _disabled = false;
  private _readonly = false;
  @HostBinding('class.sim-input-affix-wrapper') true;
  _prefixCls = 'ant-input';
  _value: string;
  _composing = false;
  _el: HTMLElement;
  _classMap: any;
  _size = 'default';
  _autosize: boolean | AutoSizeType = false;
  @ViewChild('inputTextarea') textAreaRef: ElementRef;
  @ContentChild('addOnBefore') _addOnContentBefore: TemplateRef<void>;
  @ContentChild('addOnAfter') _addOnContentAfter: TemplateRef<void>;
  @ContentChild('prefix') _prefixContent: TemplateRef<void>;
  @ContentChild('suffix') _suffixContent: TemplateRef<void>;

  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() focus: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter();

  /** 占位符 Placeholder */
  @Input() placeholder: string;
  /** 是否禁用状态 */
  @Input() disabled: boolean = false;
  /** 是否只读状态 */
  @Input() readonly: boolean = false;
  /** 输入类型 */
  @Input() type = 'text';
  /** 表单id 可以结合label的for使用 */
  @Input() id: string;
  /** textarea 的rows */
  @Input() rows: number;
  /** textarea 的cols */
  @Input() cols: number;

  // ngModel Access
  onChange: (value: string) => void = () => null;
  onTouched: () => void = () => null;

  @HostListener('compositionstart', ['$event'])
  compositionStart(e: CompositionEvent): void {
    this._composing = true;
  }

  @HostListener('compositionend', ['$event'])
  compositionEnd(e: CompositionEvent): void {
    this._composing = false;
    this.onChange(this._value);
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    if ((this._value === value) || ((this._value == null) && (value == null))) {
      return;
    }
    this._value = value;
    if (!this._composing) {
      this.onChange(value);
    }
  }

  @Input()
  set size(value: string) {
    this._size = value;
    this.setClassMap();
  }

  get size(): string {
    return this._size;
  }

  @Input()
  set autosize(value: string | boolean | AutoSizeType) {
    if (typeof value === 'string') {
      this._autosize = true;
    } else {
      this._autosize = value;
    }
    if (this._autosize) {
      this.rows = 1;
    }
  }

  get autosize(): string | boolean | AutoSizeType {
    return this._autosize;
  }

  @HostBinding('class.sim-input-readonly-wrapper')
  get _setReadonly(){
    return this.readonly;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
  }
  ngOnInit() {
    this.setClassMap();
  }




/*   ngAfterContentInit(): void {
    if (this.type === 'search' || this._prefixContent || this._suffixContent) {
      this._renderer.setAttribute(this._el, 'class', `${this._prefixCls}-affix-wrapper`);
    } else {
      this._renderer.setAttribute(this._el, 'class', `${this._prefixCls}-wrapper`);
    }
    if ((this._addOnContentBefore || this._addOnContentAfter)) {
      this._renderer.setAttribute(this._el, 'class', `${this._prefixCls}-group`);
    }
  } */

  resizeTextarea(): void {
    const textAreaRef = this.textAreaRef.nativeElement;
    // eliminate jitter
    textAreaRef.style.height = 'auto';
    const maxRows = this.autosize ? (this.autosize as AutoSizeType).maxRows || null : null;
    const minRows = this.autosize ? (this.autosize as AutoSizeType).minRows || null : null;
    const textareaStyles = calculateNodeHeight(textAreaRef, false, minRows, maxRows);
    textAreaRef.style.height = `${textareaStyles.height}px`;
    textAreaRef.style.overflowY = textareaStyles.overflowY;
  }

  textareaOnChange(): void {
    if (this.type === 'textarea' && this.autosize) {
      this.resizeTextarea();
    }
  }

  _emitFocus($event: FocusEvent) {
    this.focus.next($event);
  }

  _emitBlur($event: FocusEvent) {
    this.blur.next($event);
    this.onTouched();
  }

  _onPressEnter(): void {
    if (this.type === 'search') {
      this._emitSearch();
    }
  }

  _emitSearch(): void {
    this.search.next(this._value);
  }


  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setClassMap(): void {
    this._classMap = {
      [`sim-input-${this._size}`]: true,
      [`sim-input-disabled`]: this._disabled,
      [`sim-input-readonly`]: this._readonly,
    };
  }


}
