import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter515Component } from './chapter5-1-5.component';

describe('Chapter515Component', () => {
  let component: Chapter515Component;
  let fixture: ComponentFixture<Chapter515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
