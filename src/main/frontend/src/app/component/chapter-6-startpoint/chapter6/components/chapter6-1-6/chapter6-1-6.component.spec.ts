import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter616Component } from './chapter6-1-6.component';

describe('Chapter616Component', () => {
  let component: Chapter616Component;
  let fixture: ComponentFixture<Chapter616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
