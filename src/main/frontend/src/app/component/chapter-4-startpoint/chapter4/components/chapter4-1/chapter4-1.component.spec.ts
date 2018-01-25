import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter41Component } from './chapter4-1.component';

describe('Chapter41Component', () => {
  let component: Chapter41Component;
  let fixture: ComponentFixture<Chapter41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
