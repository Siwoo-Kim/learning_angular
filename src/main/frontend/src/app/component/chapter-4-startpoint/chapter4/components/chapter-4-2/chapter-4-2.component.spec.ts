import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter42Component } from './chapter-4-2.component';

describe('Chapter42Component', () => {
  let component: Chapter42Component;
  let fixture: ComponentFixture<Chapter42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
