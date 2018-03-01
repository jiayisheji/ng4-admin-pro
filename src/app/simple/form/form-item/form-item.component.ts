import { Component, OnInit, HostBinding, ViewEncapsulation, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-form-item',
  templateUrl: './form-item.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FormItemComponent implements OnInit {
  @HostBinding('class.sim-form-item') true;
  @Input() labelFlex: string = '20';
  @ContentChild('label') label: TemplateRef<any>;
  @ContentChild('control') control: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
