import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChapter8Component } from './first-step-chapter-8.component';

describe('FirstStepChapter8Component', () => {
  let component: FirstStepChapter8Component;
  let fixture: ComponentFixture<FirstStepChapter8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepChapter8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChapter8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
