import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter514Component } from './chapter5-1-4.component';

describe('Chapter514Component', () => {
  let component: Chapter514Component;
  let fixture: ComponentFixture<Chapter514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
