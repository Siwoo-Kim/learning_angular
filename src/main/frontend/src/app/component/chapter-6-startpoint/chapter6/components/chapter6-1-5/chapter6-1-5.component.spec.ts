import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter615Component } from './chapter6-1-5.component';

describe('Chapter615Component', () => {
  let component: Chapter615Component;
  let fixture: ComponentFixture<Chapter615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
