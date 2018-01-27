import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter513Component } from './chapter5-1-3.component';

describe('Chapter513Component', () => {
  let component: Chapter513Component;
  let fixture: ComponentFixture<Chapter513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
