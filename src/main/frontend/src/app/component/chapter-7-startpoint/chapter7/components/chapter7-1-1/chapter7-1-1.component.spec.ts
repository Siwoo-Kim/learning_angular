import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter711Component } from './chapter7-1-1.component';

describe('Chapter711Component', () => {
  let component: Chapter711Component;
  let fixture: ComponentFixture<Chapter711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
