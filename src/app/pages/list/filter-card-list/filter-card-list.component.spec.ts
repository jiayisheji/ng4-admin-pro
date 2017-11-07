import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardListComponent } from './filter-card-list.component';

describe('FilterCardListComponent', () => {
  let component: FilterCardListComponent;
  let fixture: ComponentFixture<FilterCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
