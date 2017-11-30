import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: 'MENU_CONFIG_PADDING', useValue: 24
    }
  ],
  declarations: [MenuComponent, SubMenuComponent, MenuItemComponent],
  exports: [MenuComponent, SubMenuComponent, MenuItemComponent]
})
export class MenuModule { }
