import { Directive, ElementRef, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ScrollDispatcher } from './scroll-dispatcher';


/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cdk-scrollable], [cdkScrollable]'
})
export class CdkScrollableDirective implements OnInit, OnDestroy {
    private _elementScrolled: Subject<Event> = new Subject();
    private _scrollListener = (event: Event) => this._elementScrolled.next(event);

    constructor(private _elementRef: ElementRef,
        private _scroll: ScrollDispatcher,
        private _ngZone: NgZone) { }

    ngOnInit() {
        this._ngZone.runOutsideAngular(() => {
            this.getElementRef().addEventListener('scroll', this._scrollListener);
        });

        this._scroll.register(this);
    }

    ngOnDestroy() {
        this._scroll.deregister(this);

        if (this._scrollListener) {
            this.getElementRef().removeEventListener('scroll', this._scrollListener);
        }
    }

    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    elementScrolled(): Observable<any> {
        return this._elementScrolled.asObservable();
    }

    getElementRef() {
        return this._elementRef.nativeElement;
    }
}
