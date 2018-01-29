import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter612Component } from './chapter6-1-2.component';

describe('Chapter612Component', () => {
  let component: Chapter612Component;
  let fixture: ComponentFixture<Chapter612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
