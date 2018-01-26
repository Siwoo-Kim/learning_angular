import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter44Component } from './chapter-4-4.component';

describe('Chapter44Component', () => {
  let component: Chapter44Component;
  let fixture: ComponentFixture<Chapter44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
