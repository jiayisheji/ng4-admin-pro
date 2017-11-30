import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterResultComponent } from './register-result.component';

describe('RegisterResultComponent', () => {
  let component: RegisterResultComponent;
  let fixture: ComponentFixture<RegisterResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
