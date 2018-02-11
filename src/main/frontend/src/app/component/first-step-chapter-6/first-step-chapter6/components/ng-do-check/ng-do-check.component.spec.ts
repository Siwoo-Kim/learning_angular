import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoCheckComponent } from './ng-do-check.component';

describe('NgDoCheckComponent', () => {
  let component: NgDoCheckComponent;
  let fixture: ComponentFixture<NgDoCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDoCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
