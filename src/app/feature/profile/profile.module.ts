import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ProfileRoutingModule } from './profile-routing.module';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [BasicComponent, AdvancedComponent]
})
export class ProfileModule { }
