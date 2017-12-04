import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.scss']
})
export class ExceptionComponent implements OnInit {
  _image: string;
  @Input()
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    if (value) {
      this._image = `url(${value})`;
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
