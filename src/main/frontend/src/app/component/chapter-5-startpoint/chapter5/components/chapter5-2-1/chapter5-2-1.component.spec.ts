import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter521Component } from './chapter5-2-1.component';

describe('Chapter521Component', () => {
  let component: Chapter521Component;
  let fixture: ComponentFixture<Chapter521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
