import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter511Component } from './chapter5-1-1.component';

describe('Chapter511Component', () => {
  let component: Chapter511Component;
  let fixture: ComponentFixture<Chapter511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
