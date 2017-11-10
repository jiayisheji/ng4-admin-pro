import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsComponent, SiderComponent, HeaderComponent, FooterComponent } from './layouts';

import { MenuModule } from './menu';
import { DialogModule } from './dialog';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    DialogModule
  ],
  declarations: [
    LayoutsComponent,
    SiderComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    MenuModule,
    DialogModule,
    LayoutsComponent,
    SiderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
