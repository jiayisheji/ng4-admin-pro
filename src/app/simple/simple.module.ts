import { NgModule, ModuleWithProviders } from '@angular/core';

/**
 * Simple Utility components
 */
import { MenuModule } from './menu';
import { DialogModule } from './dialog';
import { CardModule } from './card';
import { ButtonModule } from './button';

@NgModule({
    exports: [
        CardModule,
        ButtonModule,
        MenuModule,
        DialogModule
    ]
})
export class SimpleModule {
    static forRoot(options?: any): ModuleWithProviders {
        return {
            ngModule: SimpleModule,
            providers: [
                // Services
            ]
        };
    }
}
