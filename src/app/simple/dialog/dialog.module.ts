import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { DialogSubjectService } from './dialog-subject.service';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogCloseDirective } from './dialog-close.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DialogService,
    DialogSubjectService
  ],
  declarations: [
    DialogComponent,
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogCloseDirective,
    DialogConfirmComponent
  ],
  entryComponents: [
    DialogComponent,
    DialogConfirmComponent
  ],
  exports: [
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogCloseDirective
  ]
})
export class DialogModule { }
