import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter411Component } from './chapter4-1-1.component';

describe('Chapter411Component', () => {
  let component: Chapter411Component;
  let fixture: ComponentFixture<Chapter411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
