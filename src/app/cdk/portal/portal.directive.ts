import {
  NgModule,
  ComponentRef,
  Directive,
  EmbeddedViewRef,
  TemplateRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnDestroy,
  OnInit,
  Input,
} from '@angular/core';

import { Portal, TemplatePortal, ComponentPortal, BasePortalOutlet } from './portal';

/**
 * “TemplatePortal”的指导版本。因为指令是一个TemplatePortal，指令实例本身可以附加到一个主机上，从而支持门户的声明性使用。
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cdk-portal], [cdkPortal], [portal]',
  exportAs: 'cdkPortal',
})
export class CdkPortalDirective extends TemplatePortal<any> {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

/**
 * PortalOutlet是一个指令，传送门可以直接连接到它，启用声明性使用。
 *
 * Usage:
 * <ng-template [cdkPortalOutlet]="greeting"></ng-template>
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
  exportAs: 'cdkPortalOutlet, cdkPortalHost',
  // tslint:disable-next-line:use-input-property-decorator
  // inputs: ['portal: cdkPortalOutlet']
})
export class CdkPortalOutletDirective extends BasePortalOutlet implements OnInit, OnDestroy {
  /** 是否初始化传送门组件。 */
  private _isInitialized = false;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef) {
    super();
  }

  /** @deprecated */
  @Input()
  get cdkPortalOutlet() { return this.portal; }
  set cdkPortalOutlet(v) { this.portal = v; }

  /** @deprecated */
  @Input()
  get portalHost() { return this.portal; }
  set portalHost(v) { this.portal = v; }

  /** @deprecated */
  @Input()
  get cdkPortalHost() { return this.portal; }
  set cdkPortalHost(v) { this.portal = v; }

  /** 传送门与传送门插槽连接。 */
  get portal(): Portal<any> | null {
    return this._attachedPortal;
  }

  set portal(portal: Portal<any> | null) {
    // 忽略在生命周期钩子运行之前将“传送门”设置为假值的情况。
    // 这将处理用户可能执行“< div cdkPortalOutlet >”的情况，并在父组件中以编程方式附加一个传送门。
    // 当第一个CD环绕时，它将使用空字符串触发setter，从而导致用户的内容被清除。
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }

    if (this.hasAttached()) {
      super.detach();
    }

    if (portal) {
      super.attach(portal);
    }

    this._attachedPortal = portal;
  }

  ngOnInit() {
    this._isInitialized = true;
  }

  ngOnDestroy() {
    super.dispose();
    this._attachedPortal = null;
  }

  /**
   * 将给定ComponentPortal ComponentFactoryResolver PortalOutlet使用。
   *
   * @param portal 传送门将被连接到传送门插槽。
   * @returns 引用已创建的组件。
   */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    portal.setAttachedHost(this);

    // 如果传送门指定了源，那么将其用作应用程序树中组件的逻辑位置。否则，请使用这个PortalOutlet的位置。
    const viewContainerRef = portal.viewContainerRef != null ?
      portal.viewContainerRef :
      this._viewContainerRef;

    const componentFactory =
      this._componentFactoryResolver.resolveComponentFactory(portal.component);
    const ref = viewContainerRef.createComponent(
      componentFactory, viewContainerRef.length,
      portal.injector || viewContainerRef.parentInjector);

    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;

    return ref;
  }

  /**
   * 将给定的TemplatePortal连接到这个PortlHost作为嵌入式视图。
   * @param portal 传送门连接。
   * @returns 引用创建的嵌入视图。
   */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
    super.setDisposeFn(() => this._viewContainerRef.clear());

    this._attachedPortal = portal;

    return viewRef;
  }
}
