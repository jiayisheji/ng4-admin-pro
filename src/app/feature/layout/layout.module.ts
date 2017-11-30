import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        SharedModule,
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        SiderComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        SiderComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutModule { }
