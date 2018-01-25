import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter412Component } from './chapter4-1-2.component';

describe('Chapter412Component', () => {
  let component: Chapter412Component;
  let fixture: ComponentFixture<Chapter412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
