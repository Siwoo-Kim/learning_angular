import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter614Component } from './chapter6-1-4.component';

describe('Chapter614Component', () => {
  let component: Chapter614Component;
  let fixture: ComponentFixture<Chapter614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
