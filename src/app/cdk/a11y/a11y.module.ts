import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { PlatformModule } from '../platform';

import { ARIA_DESCRIBER_PROVIDER, AriaDescriber } from './aria-describer';
import { CdkMonitorFocusDirective, FOCUS_MONITOR_PROVIDER } from './focus-monitor';
import { CdkTrapFocusDirective, FocusTrapDeprecatedDirective, FocusTrapFactory } from './focus-trap';
import { InteractivityChecker } from './interactivity-checker';
import { LIVE_ANNOUNCER_PROVIDER } from './live-announcer';

@NgModule({
    imports: [CommonModule, PlatformModule],
    declarations: [CdkTrapFocusDirective, FocusTrapDeprecatedDirective, CdkMonitorFocusDirective],
    exports: [CdkTrapFocusDirective, FocusTrapDeprecatedDirective, CdkMonitorFocusDirective],
    providers: [
        InteractivityChecker,
        FocusTrapFactory,
        AriaDescriber,
        LIVE_ANNOUNCER_PROVIDER,
        ARIA_DESCRIBER_PROVIDER,
        FOCUS_MONITOR_PROVIDER,
    ]
})
export class A11yModule { }
