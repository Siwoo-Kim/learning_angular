import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangesParentComponent } from './ng-on-changes-parent.component';

describe('NgOnChangesParentComponent', () => {
  let component: NgOnChangesParentComponent;
  let fixture: ComponentFixture<NgOnChangesParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnChangesParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnChangesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
