import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverCardListComponent } from './cover-card-list.component';

describe('CoverCardListComponent', () => {
  let component: CoverCardListComponent;
  let fixture: ComponentFixture<CoverCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
