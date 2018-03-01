import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemMetaComponent } from './list-item-meta.component';

describe('ListItemMetaComponent', () => {
  let component: ListItemMetaComponent;
  let fixture: ComponentFixture<ListItemMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
