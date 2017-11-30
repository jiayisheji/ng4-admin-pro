import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { INav } from '../nav';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {
  static forRoot(config: any = []): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: [
        { provide: 'BREADCRUMB_CONFIG', useValue: config }
      ]
    };
  }
}
