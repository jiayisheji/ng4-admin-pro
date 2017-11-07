import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsComponent, SiderComponent, HeaderComponent, FooterComponent } from './layouts';

import { MenuModule } from './menu';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
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
    LayoutsComponent,
    SiderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
