export * from './overlay-config';
export * from './position/connected-position';
export * from './scroll';
export * from './overlay.module';
export { Overlay } from './overlay';
export { OverlayContainer } from './overlay-container';
export { CdkOverlayOrigin, CdkConnectedOverlay } from './overlay.directives';
export { FullscreenOverlayContainer } from './fullscreen-overlay-container';
export { OverlayRef, OverlaySizeConfig } from './overlay-ref';
export { ViewportRuler, VIEWPORT_RULER_PROVIDER } from '../scrolling';
export { ComponentType } from '../portal';
export { OverlayKeyboardDispatcher } from './keyboard/overlay-keyboard-dispatcher';

// 导出预定义的位置策略和界面来构建自定义的位置。
export { PositionStrategy } from './position/position-strategy';
export { GlobalPositionStrategy } from './position/global-position-strategy';
export { ConnectedPositionStrategy } from './position/connected-position-strategy';


/** @deprecated使用CdkConnectedOverlay */
export { CdkConnectedOverlay as ConnectedOverlayDirective } from './overlay.directives';

/** @deprecated 使用CdkOverlayOrigin */
export { CdkOverlayOrigin as OverlayOrigin } from './overlay.directives';
