import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { INav } from '@app/config/nav';
import { RouterModule } from '@angular/router';
import { BreadcrumbService} from './breadcrumb.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {
  static forRoot(config: any = []): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: [
        BreadcrumbService,
        { provide: 'BREADCRUMB_CONFIG', useValue: config }
      ]
    };
  }
}
