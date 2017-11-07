import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionRoutingModule } from './exception-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

@NgModule({
  imports: [
    CommonModule,
    ExceptionRoutingModule
  ],
  declarations: [NotFoundComponent, ForbiddenComponent, InternalServerErrorComponent]
})
export class ExceptionModule { }
