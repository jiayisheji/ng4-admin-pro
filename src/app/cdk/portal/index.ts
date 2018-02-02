export * from './portal';
export * from './portal.module';
export * from './dom-portal-outlet';
export * from './portal.directive';
export * from './portal-injector';

export { DomPortalOutlet as DomPortalHost } from './dom-portal-outlet';
export {
    CdkPortalOutletDirective as PortalHostDirective,
    CdkPortalDirective as TemplatePortalDirective,
} from './portal.directive';
export { PortalOutlet as PortalHost, BasePortalOutlet as BasePortalHost } from './portal';
