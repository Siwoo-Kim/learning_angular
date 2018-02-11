import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChapter7Component } from './first-step-chapter-7.component';

describe('FirstStepChapter7Component', () => {
  let component: FirstStepChapter7Component;
  let fixture: ComponentFixture<FirstStepChapter7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepChapter7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChapter7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
