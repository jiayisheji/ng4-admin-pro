/**
 * angular core Module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Layout Components
 */
import { LayoutsComponent, SiderComponent, HeaderComponent, FooterComponent } from './layouts';

/**
 * Simple Utility components
 */
import { MenuModule } from './menu';
import { DialogModule } from './dialog';
import { CardModule } from './card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    DialogModule,
    CardModule
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
    CardModule,
    LayoutsComponent,
    SiderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
