import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  AfterViewInit,
  ComponentRef,
  Input,
  Inject,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { DialogSubjectService } from './dialog-subject.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [DialogSubjectService]
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  // 显示状态
  _visible: boolean;
  // 动画状态
  _animationStatus: string;
  // backdrop样式
  _backdropClassMap: object;
  // dialog样式
  _dialogClassMap: object;
  // 插入组件的容器
  _dialogComponent: ComponentFactory<any>;
  // 子预加载数据
  _componentResolve: object;
  // 载入子组件
  @ViewChild('dialogComponent', { read: ViewContainerRef }) dialogComponentEl: ViewContainerRef;
  // 获取dialog容器
  @ViewChild('dialogContainer') dialogEl: ElementRef;
  @Input()
  set dialogComponent(value: ComponentFactory<any>) {
    // 如果容器对象已存在，则直接渲染，如果不存在，则设置到_bodyComponent，在ngAfterViewInit中执行
    if (this.dialogComponentEl) {
      const compRef: ComponentRef<any> = this.dialogComponentEl.createComponent(value, null, this._vcr.injector);
      Object.assign(compRef.instance, this._componentResolve);
    }
  }

  // 显示状态
  @Input()
  get isOpen(): boolean {
    return this._visible;
  }

  set isOpen(value: boolean) {
    if (this._visible === value) {
      return;
    }
    if (value) {
      this._anmiateFade('enter');
      this.subject.next('onShow');
    } else {
      this._anmiateFade('leave');
      this.subject.next('onHide');
    }
    this._visible = value;
    // this.dialogOnChange.emit(this._visible);
    // 设置全局的overflow样式
    this._setDocumentOverflowHidden(value);
  }

  // 配置子组件输入数据
  @Input()
  set dialogResolve(value: Object) {
    this._componentResolve = value;
  }

  constructor(private subject: DialogSubjectService, private _vcr: ViewContainerRef, @Inject(DOCUMENT) private doc: Document) {
    this.subject.dialogId = (new Date).getTime() + '';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this._dialogComponent) {
      const compRef: ComponentRef<any> = this.dialogComponentEl.createComponent(this._dialogComponent, null, this._vcr.injector);
      Object.assign(compRef.instance, this._componentResolve);
    }
  }

  ngOnDestroy() {
    if (this.isOpen) {
      this._setDocumentOverflowHidden(false);
    }
    this.subject.next('onDestroy');
    this.subject.unsubscribe();
    this.subject = null;
  }

  /**
   * 点击遮罩关闭
   * @param event
   */
  closeBackdrop(event): void {
    if (event.target.getAttribute('role') === 'dialog') {
      this.subject.next('onCancel');
    }
  }

  /**
 * 入场出场动画
 * @param status
 */
  private _anmiateFade(status: string) {
    this._animationStatus = status;
    this._setClassMap();
    setTimeout(_ => {
      this._animationStatus = '';
      this._setClassMap();
      this.subject.next(status === 'enter' ? 'onShown' : 'onHidden');
      // modal打开后，默认焦点设置到modal上
      if (status === 'enter') {
        this.dialogEl.nativeElement.focus();
      }
    }, 200);
  }

  /**
 * 设置样式
 */
  private _setClassMap(): void {
    this._backdropClassMap = {
      'dialog-backdrop': true,
      'dialog-backdrop-hidden': !this._visible && !this._animationStatus,
      'fade-enter': this._animationStatus === 'enter',
      'fade-enter-active': this._animationStatus === 'enter',
      'fade-leave': this._animationStatus === 'leave',
      'fade-leave-active': this._animationStatus === 'leave'
    };

    this._dialogClassMap = {
      'dialog-container': true,
      'zoom-enter': this._animationStatus === 'enter',
      'zoom-enter-active': this._animationStatus === 'enter',
      'zoom-leave': this._animationStatus === 'leave',
      'zoom-leave-active': this._animationStatus === 'leave'
    };
  }

  /**
   * 设置全局的overflow样式
   * @param status
   */
  private _setDocumentOverflowHidden(status: Boolean) {
    this.doc.body.style.overflow = status ? 'hidden' : '';
  }

}
