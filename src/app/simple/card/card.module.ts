import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardContentComponent, DividerComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, CardHeaderComponent, CardContentComponent, DividerComponent],
  exports: [CardComponent, CardHeaderComponent, CardContentComponent, DividerComponent]
})
export class CardModule { }
