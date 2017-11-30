/**
 * angular core Module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { getNavData } from './nav';

/**
 * Simple Utility components
 */
import { SimpleModule } from '@app/simple';

import { BreadcrumbModule } from './breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SimpleModule.forRoot(),
    BreadcrumbModule.forRoot(getNavData),
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    RouterModule,
    SimpleModule,
    BreadcrumbModule,
  ]
})
export class SharedModule { }
