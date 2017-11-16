import { element } from 'protractor';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sim-card,[sim-card]',
  exportAs: 'simCard',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @HostBinding('class.sim-card') _simCard = true;
}


@Component({
  selector: 'sim-card-header,[sim-card-header]',
  exportAs: 'simCardHeader',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent {
  @HostBinding('class.sim-card-header') _simCardHeader = true;
}

@Component({
  selector: 'sim-card-content,[sim-card-content]',
  exportAs: 'simCardContent',
  template: `
    <ng-content *ngIf="!_loading"></ng-content>
    <div class="sim-card-loading"  *ngIf="_loading">
        <p class="sim-card-loading-block" style="width: 94%;"></p>
        <p>
            <span class="sim-card-loading-block" style="width: 28%;"></span><span class="sim-card-loading-block" style="width: 62%;"></span>
        </p>
        <p>
            <span class="sim-card-loading-block" style="width: 22%;"></span><span class="sim-card-loading-block" style="width: 66%;"></span>
        </p>
        <p>
            <span class="sim-card-loading-block" style="width: 56%;"></span><span class="sim-card-loading-block" style="width: 39%;"></span>
        </p>
        <p>
            <span class="sim-card-loading-block" style="width: 21%;"></span><span class="sim-card-loading-block" style="width: 15%;"></span><span class="card-loading-block" style="width: 40%;"></span>
        </p>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent {
  @HostBinding('class.sim-card-content') _simCardContent = true;

  _loading: boolean = false;
  @Input()
  get loading(): boolean {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = value;
  }
}

@Component({
  selector: 'sim-divider,[sim-divider]',
  exportAs: 'simDivider',
  template: '',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent {
  @HostBinding('class.sim-divider') _simDivider = true;
}
