import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChapter6Component } from './first-step-chapter-6.component';

describe('FirstStepChapter6Component', () => {
  let component: FirstStepChapter6Component;
  let fixture: ComponentFixture<FirstStepChapter6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepChapter6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChapter6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
