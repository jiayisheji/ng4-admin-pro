import { Directive, HostListener } from '@angular/core';
import { DialogSubjectService } from './dialog-subject.service';

@Directive({
  selector: '[appDialogClose],[app-dialog-close]'
})
export class DialogCloseDirective {

  constructor(private subject: DialogSubjectService) { }

  /** clear all item selected status except this */
  @HostListener('click', ['$event'])
  _onClickItem(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // 如果没有dialogId 说明不是一个弹窗
    if (this.subject.dialogId) {
      this.subject.next('onCancel');
    }
  }
}
