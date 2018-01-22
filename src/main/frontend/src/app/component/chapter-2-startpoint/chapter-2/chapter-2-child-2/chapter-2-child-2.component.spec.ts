import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2Child2Component } from './chapter-2-child-2.component';

describe('Chapter2Child2Component', () => {
  let component: Chapter2Child2Component;
  let fixture: ComponentFixture<Chapter2Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
