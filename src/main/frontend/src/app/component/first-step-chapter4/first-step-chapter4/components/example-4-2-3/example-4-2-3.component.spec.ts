import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example423Component } from './example-4-2-3.component';

describe('Example423Component', () => {
  let component: Example423Component;
  let fixture: ComponentFixture<Example423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
