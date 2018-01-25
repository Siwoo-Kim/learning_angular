import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter43Component } from './chapter-4-3.component';

describe('Chapter43Component', () => {
  let component: Chapter43Component;
  let fixture: ComponentFixture<Chapter43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
