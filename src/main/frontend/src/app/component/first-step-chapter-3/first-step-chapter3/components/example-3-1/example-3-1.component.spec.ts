import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example31Component } from './example-3-1.component';

describe('Example31Component', () => {
  let component: Example31Component;
  let fixture: ComponentFixture<Example31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
