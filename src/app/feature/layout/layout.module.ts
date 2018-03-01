import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SiderComponent } from './sider.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ContentComponent } from './content.component';
import { HeaderTopbarComponent } from './header-topbar/header-topbar.component';
import { SiderMenuComponent } from './sider-menu/sider-menu.component';

@NgModule({
    imports: [
        SharedModule,
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        SiderComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        HeaderTopbarComponent,
        SiderMenuComponent
    ],
    providers: [],
})
export class LayoutModule { }
