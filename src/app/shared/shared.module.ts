/**
 * angular core Module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { getNavData } from '@app/config';

/**
 * 第三方依赖组件
 */
import { FlexLayoutModule } from '@angular/flex-layout';


/**
 * Simple Utility components
 */
import { SimpleModule } from '@app/simple';

import { BreadcrumbModule } from './breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SimpleModule.forRoot(),
    BreadcrumbModule.forRoot(getNavData),
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SimpleModule,
    BreadcrumbModule,
  ]
})
export class SharedModule { }
