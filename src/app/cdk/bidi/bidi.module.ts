import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DirDirective } from './dir.directive';
import { DIR_DOCUMENT, Directionality } from './directionality';


@NgModule({
    exports: [DirDirective],
    declarations: [DirDirective],
    providers: [
        { provide: DIR_DOCUMENT, useExisting: DOCUMENT },
        Directionality,
    ]
})
export class BidiModule { }
