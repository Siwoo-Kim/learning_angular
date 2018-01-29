import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter611Component } from './chapter6-1-1.component';

describe('Chapter611Component', () => {
  let component: Chapter611Component;
  let fixture: ComponentFixture<Chapter611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
