import { Component, OnInit, OnDestroy, Input, TemplateRef } from '@angular/core';
import { DialogSubjectService } from '../dialog-subject.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
  _contentTpl: TemplateRef<any>;
  _content: string;

  @Input()
  set content(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._contentTpl = value;
    } else {
      this._content = value;
    }
  }
  constructor(private subject: DialogSubjectService) { }

  ngOnInit() {
  }

  clickCancel() {
    this.subject.next('onCancel');
  }

  clickConfirm() {
    this.subject.next({ data: 'hahah' });
    this.subject.next('onConfirm');
  }
}
