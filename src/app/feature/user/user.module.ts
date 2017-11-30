import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterResultComponent } from './register-result/register-result.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, LoginComponent, RegisterComponent, RegisterResultComponent]
})
export class UserModule { }
