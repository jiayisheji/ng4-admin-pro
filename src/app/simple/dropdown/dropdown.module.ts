import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownDirective } from './dropdown.directive';
import { OverlayModule } from '@app/cdk';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '@app/simple/menu';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    FormsModule,
    MenuModule
  ],
  declarations: [DropdownComponent, DropdownDirective],
  exports: [DropdownComponent, DropdownDirective]
})
export class DropdownModule { }
