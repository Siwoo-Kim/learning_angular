import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter531Component } from './chapter-5-3-1.component';

describe('Chapter531Component', () => {
  let component: Chapter531Component;
  let fixture: ComponentFixture<Chapter531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
