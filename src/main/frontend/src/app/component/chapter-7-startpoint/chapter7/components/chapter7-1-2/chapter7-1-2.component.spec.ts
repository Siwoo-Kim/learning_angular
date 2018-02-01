import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter712Component } from './chapter7-1-2.component';

describe('Chapter712Component', () => {
  let component: Chapter712Component;
  let fixture: ComponentFixture<Chapter712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
