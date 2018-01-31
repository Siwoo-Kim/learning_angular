import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter617Component } from './chapter6-1-7.component';

describe('Chapter617Component', () => {
  let component: Chapter617Component;
  let fixture: ComponentFixture<Chapter617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
