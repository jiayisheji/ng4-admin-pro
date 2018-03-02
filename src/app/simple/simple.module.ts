import { NgModule, ModuleWithProviders } from '@angular/core';

/**
 * Simple Utility components
 */
import { MenuModule } from './menu';
import { DialogModule } from './dialog';
import { CardModule } from './card';
import { ButtonModule } from './button';
import { SpinnerModule } from './spinner';
import { ListModule } from './list';
import { AvatarModule } from './avatar';
import { BadgeModule } from './badge';
import { FormModule } from './form';
import { InputModule } from './input';
import { DropdownModule } from './dropdown';

@NgModule({
    exports: [
        CardModule,
        ButtonModule,
        MenuModule,
        DialogModule,
        SpinnerModule,
        ListModule,
        AvatarModule,
        BadgeModule,
        FormModule,
        InputModule,
        DropdownModule
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
