import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSearchParentComponent } from './dom-search-parent.component';

describe('DomSearchParentComponent', () => {
  let component: DomSearchParentComponent;
  let fixture: ComponentFixture<DomSearchParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomSearchParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomSearchParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
