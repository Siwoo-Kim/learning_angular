import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter613Component } from './chapter6-1-3.component';

describe('Chapter613Component', () => {
  let component: Chapter613Component;
  let fixture: ComponentFixture<Chapter613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
