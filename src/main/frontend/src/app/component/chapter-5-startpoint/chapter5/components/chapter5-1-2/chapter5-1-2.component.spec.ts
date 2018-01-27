import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter512Component } from './chapter5-1-2.component';

describe('Chapter512Component', () => {
  let component: Chapter512Component;
  let fixture: ComponentFixture<Chapter512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
