import { Direction, Directionality } from '../bidi';
import { coerceBooleanProperty } from '../coercion';
import { ESCAPE } from '../keycodes';
import { TemplatePortal } from '../portal';
import {
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    InjectionToken,
    Input,
    OnChanges,
    OnDestroy,
    Optional,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Overlay } from './overlay';
import { OverlayConfig } from './overlay-config';
import { OverlayRef } from './overlay-ref';
import {
    ConnectedOverlayPositionChange,
    ConnectionPositionPair,
} from './position/connected-position';
import { ConnectedPositionStrategy } from './position/connected-position-strategy';
import { RepositionScrollStrategy, ScrollStrategy } from './scroll/index';
import { DOCUMENT } from '@angular/common';


/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
const defaultPositionList = [
    new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair(
        { originX: 'end', originY: 'top' },
        { overlayX: 'end', overlayY: 'bottom' }),
    new ConnectionPositionPair(
        { originX: 'end', originY: 'bottom' },
        { overlayX: 'end', overlayY: 'top' }),
];

/** Injection token that determines the scroll handling while the connected overlay is open. */
export const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY =
    new InjectionToken<() => ScrollStrategy>('cdk-connected-overlay-scroll-strategy');

/** @docs-private */
export function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):
    () => RepositionScrollStrategy {
    return () => overlay.scrollStrategies.reposition();
}

/** @docs-private */
export const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};


/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
    exportAs: 'cdkOverlayOrigin',
})
// tslint:disable-next-line:directive-class-suffix
export class CdkOverlayOrigin {
    constructor(
        /** Reference to the element on which the directive is applied. */
        public elementRef: ElementRef) { }
}


/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
    exportAs: 'cdkConnectedOverlay'
})
// tslint:disable-next-line:directive-class-suffix
export class CdkConnectedOverlay implements OnDestroy, OnChanges {
    private _overlayRef: OverlayRef;
    private _templatePortal: TemplatePortal<any>;
    /** Whether or not the overlay should attach a backdrop. */
    private _hasBackdrop = false;
    private _backdropSubscription = Subscription.EMPTY;
    private _positionSubscription = Subscription.EMPTY;
    /** The offset in pixels for the overlay connection point on the x-axis */
    private _offsetX = 0;
    /** The offset in pixels for the overlay connection point on the y-axis */
    private _offsetY = 0;
    private _position: ConnectedPositionStrategy;

    /** Origin for the connected overlay. */
    origin: CdkOverlayOrigin;

    /** Registered connected position pairs. */
    positions: ConnectionPositionPair[];

    /** The width of the overlay panel. */
    width: number | string;

    /** The height of the overlay panel. */
    height: number | string;

    /** The min width of the overlay panel. */
    minWidth: number | string;

    /** The min height of the overlay panel. */
    minHeight: number | string;

    /** The custom class to be set on the backdrop element. */
    backdropClass: string;

    /** Strategy to be used when handling scroll events while the overlay is open. */
    scrollStrategy: ScrollStrategy = this._scrollStrategy();

    /** Whether the overlay is open. */
    open = false;
    /** @deprecated */
    @Input()
    get cdkConnectedOverlayOrigin(): CdkOverlayOrigin { return this.origin; }
    set cdkConnectedOverlayOrigin(_origin: CdkOverlayOrigin) { this.origin = _origin; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayPositions(): ConnectionPositionPair[] { return this.positions; }
    set cdkConnectedOverlayPositions(_positions: ConnectionPositionPair[]) { this.positions = _positions; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayOffsetX(): number { return this._offsetX; }
    set cdkConnectedOverlayOffsetX(_offsetX: number) {
        this._offsetX = _offsetX;
        if (this._position) {
            this._position.withOffsetX(_offsetX);
        }
    }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayOffsetY(): number { return this._offsetY; }
    set cdkConnectedOverlayOffsetY(_offsetY: number) {
        this._offsetY = _offsetY;
        if (this._position) {
            this._position.withOffsetX(_offsetY);
        }
    }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayWidth(): number | string { return this.width; }
    set cdkConnectedOverlayWidth(_width: number | string) { this.width = _width; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayHeight(): number | string { return this.height; }
    set cdkConnectedOverlayHeight(_height: number | string) { this.height = _height; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayMinWidth(): number | string { return this.minWidth; }
    set cdkConnectedOverlayMinWidth(_minWidth: number | string) { this.minWidth = _minWidth; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayMinHeight(): number | string { return this.minHeight; }
    set cdkConnectedOverlayMinHeight(_minHeight: number | string) { this.minHeight = _minHeight; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayBackdropClass(): string { return this.backdropClass; }
    set cdkConnectedOverlayBackdropClass(_backdropClass: string) { this.backdropClass = _backdropClass; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayScrollStrategy(): ScrollStrategy { return this.scrollStrategy; }
    set cdkConnectedOverlayScrollStrategy(_scrollStrategy: ScrollStrategy) {
        this.scrollStrategy = _scrollStrategy;
    }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayOpen(): boolean { return this.open; }
    set cdkConnectedOverlayOpen(_open: boolean) { this.open = _open; }

    /** @deprecated */
    @Input()
    get cdkConnectedOverlayHasBackdrop() { return this._hasBackdrop; }
    set cdkConnectedOverlayHasBackdrop(_hasBackdrop: any) {
        this._hasBackdrop = coerceBooleanProperty(_hasBackdrop);
    }

    /** Event emitted when the backdrop is clicked. */
    @Output() backdropClick = new EventEmitter<void>();

    /** Event emitted when the position has changed. */
    @Output() positionChange = new EventEmitter<ConnectedOverlayPositionChange>();

    /** Event emitted when the overlay has been attached. */
    @Output() attach = new EventEmitter<void>();

    /** Event emitted when the overlay has been detached. */
    @Output() detach = new EventEmitter<void>();

    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    constructor(
        private _overlay: Overlay,
        templateRef: TemplateRef<any>,
        viewContainerRef: ViewContainerRef,
        @Inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY) private _scrollStrategy,
        @Optional() private _dir: Directionality,
        @Optional() @Inject(DOCUMENT) private _document: any) {
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    }

    /** The associated overlay reference. */
    get overlayRef(): OverlayRef {
        return this._overlayRef;
    }

    /** The element's layout direction. */
    get dir(): Direction {
        return this._dir ? this._dir.value : 'ltr';
    }

    ngOnDestroy() {
        this._destroyOverlay();
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);
        if (changes['cdkConnectedOverlayOpen']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    }

    /** Creates an overlay */
    private _createOverlay() {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }

        this._overlayRef = this._overlay.create(this._buildConfig());
    }

    /** Builds the overlay config based on the directive's inputs */
    private _buildConfig(): OverlayConfig {
        const positionStrategy = this._position = this._createPositionStrategy();
        const overlayConfig = new OverlayConfig({
            positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this._hasBackdrop
        });

        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }

        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }

        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }

        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }

        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        return overlayConfig;
    }

    /** Returns the position strategy of the overlay to be set on the overlay config */
    private _createPositionStrategy(): ConnectedPositionStrategy {
        const pos = this.positions[0];
        const originPoint = { originX: pos.originX, originY: pos.originY };
        const overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };

        const strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this._offsetX)
            .withOffsetY(this._offsetY);

        this._handlePositionChanges(strategy);

        return strategy;
    }

    private _handlePositionChanges(strategy: ConnectedPositionStrategy): void {
        for (let i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition(
                { originX: this.positions[i].originX, originY: this.positions[i].originY },
                { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY }
            );
        }

        this._positionSubscription =
            strategy.onPositionChange.subscribe(pos => this.positionChange.emit(pos));
    }

    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    private _attachOverlay() {
        if (!this._overlayRef) {
            this._createOverlay();
        }

        this._position.withDirection(this.dir);
        this._overlayRef.setDirection(this.dir);
        this._document.addEventListener('keydown', this._escapeListener);

        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }

        if (this._hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(() => {
                this.backdropClick.emit();
            });
        }
    }

    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    private _detachOverlay() {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }

        this._backdropSubscription.unsubscribe();
        this._document.removeEventListener('keydown', this._escapeListener);
    }

    /** Destroys the overlay created by this directive. */
    private _destroyOverlay() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }

        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this._document.removeEventListener('keydown', this._escapeListener);
    }

    /** Event listener that will close the overlay when the user presses escape. */
    private _escapeListener = (event: KeyboardEvent) => {
        if (event.keyCode === ESCAPE) {
            this._detachOverlay();
        }
    }
}
