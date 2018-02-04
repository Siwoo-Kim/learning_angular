import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example32Component } from './example-3-2.component';

describe('Example32Component', () => {
  let component: Example32Component;
  let fixture: ComponentFixture<Example32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
