import { NgModule } from '@angular/core';
import { CdkPortalDirective, CdkPortalOutletDirective } from './portal.directive';
@NgModule({
  declarations: [CdkPortalDirective, CdkPortalOutletDirective],
  exports: [CdkPortalDirective, CdkPortalOutletDirective],
})
export class PortalModule { }
