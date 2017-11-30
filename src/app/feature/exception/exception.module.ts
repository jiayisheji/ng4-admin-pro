import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ExceptionRoutingModule } from './exception-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

@NgModule({
  imports: [
    SharedModule,
    ExceptionRoutingModule
  ],
  declarations: [NotFoundComponent, ForbiddenComponent, InternalServerErrorComponent]
})
export class ExceptionModule { }
