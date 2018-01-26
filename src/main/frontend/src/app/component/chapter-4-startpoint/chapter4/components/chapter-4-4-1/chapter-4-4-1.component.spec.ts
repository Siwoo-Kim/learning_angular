import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter441Component } from './chapter-4-4-1.component';

describe('Chapter441Component', () => {
  let component: Chapter441Component;
  let fixture: ComponentFixture<Chapter441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
