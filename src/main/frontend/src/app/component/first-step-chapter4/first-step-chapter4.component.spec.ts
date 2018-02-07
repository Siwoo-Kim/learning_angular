import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChapter4Component } from './first-step-chapter4.component';

describe('FirstStepChapter4Component', () => {
  let component: FirstStepChapter4Component;
  let fixture: ComponentFixture<FirstStepChapter4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepChapter4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChapter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
