import {
    Directive,
    Output,
    Input,
    EventEmitter,
    AfterContentInit,
    HostBinding
} from '@angular/core';

import { Directionality } from './directionality';
import { Direction } from './dir';

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[dir]',
    providers: [{ provide: Directionality, useExisting: DirDirective }],
    exportAs: 'dir',
})
// tslint:disable-next-line:directive-class-suffix
export class DirDirective implements Directionality, AfterContentInit {
    _dir: Direction = 'ltr';

    /** Whether the `value` has been set to its initial value. */
    private _isInitialized = false;

    /** Event emitted when the direction changes. */
    // tslint:disable-next-line:no-output-rename
    @Output('dirChange') change = new EventEmitter<Direction>();

    /** @docs-private */
    @Input('dir')
    @HostBinding('attr.dir')
    get dir(): Direction { return this._dir; }
    set dir(v: Direction) {
        const old = this._dir;
        this._dir = v;
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }

    /** Current layout direction of the element. */
    get value(): Direction { return this.dir; }

    /** Initialize once default value has been set. */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
}
