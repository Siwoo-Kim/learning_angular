import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChapter3Component } from './first-step-chapter-3.component';

describe('FirstStepChapter3Component', () => {
  let component: FirstStepChapter3Component;
  let fixture: ComponentFixture<FirstStepChapter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepChapter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChapter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
