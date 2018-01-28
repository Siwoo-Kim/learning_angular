import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5151Component } from './chapter5-1-5-1.component';

describe('Chapter5151Component', () => {
  let component: Chapter5151Component;
  let fixture: ComponentFixture<Chapter5151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter5151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
