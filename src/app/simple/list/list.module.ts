import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SpinnerModule } from '../spinner';
import { ListItemActionComponent } from './list-item-action/list-item-action.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    RouterModule
  ],
  declarations: [ListComponent, ListItemComponent, ListItemActionComponent],
  exports: [ListComponent, ListItemComponent, ListItemActionComponent]
})
export class ListModule { }
