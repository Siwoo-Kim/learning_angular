import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChapter5Component } from './first-step-chapter-5.component';

describe('FirstStepChapter5Component', () => {
  let component: FirstStepChapter5Component;
  let fixture: ComponentFixture<FirstStepChapter5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepChapter5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChapter5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
