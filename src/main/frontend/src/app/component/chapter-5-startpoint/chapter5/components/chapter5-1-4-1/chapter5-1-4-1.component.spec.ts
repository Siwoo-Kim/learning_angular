import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5141Component } from './chapter5-1-4-1.component';

describe('Chapter5141Component', () => {
  let component: Chapter5141Component;
  let fixture: ComponentFixture<Chapter5141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter5141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
