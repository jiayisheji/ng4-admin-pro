import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemActionComponent } from './list-item-action.component';

describe('ListItemActionComponent', () => {
  let component: ListItemActionComponent;
  let fixture: ComponentFixture<ListItemActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
