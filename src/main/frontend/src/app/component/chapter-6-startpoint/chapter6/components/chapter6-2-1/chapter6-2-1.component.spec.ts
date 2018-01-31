import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter621Component } from './chapter6-2-1.component';

describe('Chapter621Component', () => {
  let component: Chapter621Component;
  let fixture: ComponentFixture<Chapter621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
