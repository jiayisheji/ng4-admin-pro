
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@app/simple/dialog';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  _loading = true;
  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  open1($event, confirmTpl) {
    const confirm = this.dialog.confirm('111');
    confirm.subscribe(result => {
      console.log('confirm', result);
    });
  }

  close() {
    this._loading = false;
  }
}
