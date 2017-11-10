import { DialogConfig } from './dialog-config.service';
import { Injectable, ComponentFactory, ComponentFactoryResolver, ApplicationRef, ComponentRef, Type, TemplateRef } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogSubjectService } from './dialog-subject.service';
@Injectable()
export class DialogService {
  // 默认层级
  private _zIndex = 1040;
  _dailogCompFactory: ComponentFactory<DialogComponent>;
  constructor(private _cfr: ComponentFactoryResolver, private _appRef: ApplicationRef) {
    this._dailogCompFactory = this._cfr.resolveComponentFactory(DialogComponent);
  }
  open(dialogRef: Type<any>, config: DialogConfig = {}): DialogSubjectService {
    if (!(dialogRef instanceof Type)) {
      throw Error('dialogRef is not ComponentRef');
    }
    const options: DialogConfig = new DialogConfig();
    config['component'] = dialogRef;
    config['zIndex'] = this._zIndex;
    this._zIndex += 20;
    const props: DialogConfig = this._initConfig(config, options);
    // hasBackdrop 如果没有传递，默认为true
    if (props['hasBackdrop'] === undefined) {
      props['hasBackdrop'] = true;
    }
    return this._open(props, this._dailogCompFactory);
  }

  /**
   * 初始化配置参数
   * @param config 传递参数
   * @param options 默认参数
   */
  private _initConfig(config: DialogConfig, options: {}) {
    const props = {};
    const optionalParams: string[] = [
      'resolve', // 将componentParams放在第一位是因为必须在component赋值前进行赋值
      'visible',
      'component',
      'width',
      'height',
      'zIndex',
      'onConfirm',
      'onCancel',
      'wrapClassName'
    ];

    config = Object.assign(options, config);
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        const modalKey = 'dialog' + key.replace(/^\w{1}/, (a) => {
          return a.toLocaleUpperCase();
        });
        props[modalKey] = config[key];
      }
    });
    props['onConfirm'] = this._getConfirmCb(props['dialogOnConfirm'], false);
    props['onCancel'] = this._getConfirmCb(props['dialogOnCancel']);
    // 在service模式下，不需要dialogOnConfirm，防止触发this.dialogOnConfirm.emit(e);
    delete props['dialogOnConfirm'];
    delete props['dialogOnCancel'];
    return props;
  }

  private _getConfirmCb(fn?: Function, isShowConfirmLoading: boolean = false): Function {
    return (_close, _instance) => {
      /* if (isShowConfirmLoading) {
        _instance.nzConfirmLoading = true;
      } */
      if (fn) {
        const ret = fn();
        if (!ret) {
          _close();
        } else if (ret.then) {
          ret.then(_close);
        }
      } else {
        _close();
      }
    };
  }

  /**
   * 打开方法
   * @param props 参数
   * @param factory 模块
   */
  private _open(props: DialogConfig, factory: ComponentFactory<DialogComponent>): DialogSubjectService {
    // 在body的内部最前插入一个<app-dialog></app-dialog>方便进行ApplicationRef.bootstrap
    document.body.insertBefore(document.createElement(factory.selector), document.body.firstChild);
    // 自定义组件
    let customComponentFactory: ComponentFactory<any>;
    let compRef: ComponentRef<DialogComponent>;
    let instance: any;
    let subject: any;

    if (props['dialogComponent'] instanceof Type) {
      customComponentFactory = this._cfr.resolveComponentFactory(props['dialogComponent']);
      // 将编译出来的ngmodule中的用户component的factory作为modal内容存入
      props['dialogComponent'] = customComponentFactory;
    }
    compRef = this._appRef.bootstrap(factory);
    instance = compRef.instance;
    subject = instance.subject;
    ['onConfirm', 'onCancel'].forEach((eventType: string) => {
      subject.on(eventType, () => {
        const eventHandler = props[eventType];
        if (eventHandler) {
          eventHandler(() => {
            instance.isOpen = false;
            setTimeout(() => {
              compRef.destroy();
              this._zIndex -= 20;
            }, 200);
          }, instance);
        }
      });
    });
    Object.assign(instance, props, {
      isOpen: true
    });
    return subject;
  }

  confirm(contentRef: string | TemplateRef<any>, config: DialogConfig = {}): DialogSubjectService {
    let intercept: boolean;
    if (typeof contentRef === 'string' && contentRef !== '') {
      intercept = true;
    }
    if (contentRef instanceof TemplateRef) {
      intercept = true;
    }
    if (!intercept) {
      throw Error('contentRef is not TemplateRef of string');
    }
    return this.open(DialogConfirmComponent, Object.assign(config, {
      resolve: {
        content: contentRef
      }
    }));
  }
}
