import { NgModule } from '@angular/core';
import { SCROLL_DISPATCHER_PROVIDER } from './scroll-dispatcher';
import { CdkScrollableDirective } from './scrollable.directive';
import { PlatformModule } from '../platform';

@NgModule({
    imports: [PlatformModule],
    exports: [CdkScrollableDirective],
    declarations: [CdkScrollableDirective],
    providers: [SCROLL_DISPATCHER_PROVIDER],
})
export class ScrollDispatchModule { }
