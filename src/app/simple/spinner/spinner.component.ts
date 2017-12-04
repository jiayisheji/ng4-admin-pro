import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnInit {
  @HostBinding('class.sim-spinner') _simSpinner = true;

  @Input() loading = true;

  _tips = '正在读取数据...';
  @Input()
  get tips(): string {
    return this._tips;
  }
  set tips(value: string) {
    this._tips = value;
  }
  constructor() { }

  ngOnInit() {
  }

}

