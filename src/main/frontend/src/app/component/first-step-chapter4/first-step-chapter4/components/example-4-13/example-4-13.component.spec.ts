import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example413Component } from './example-4-13.component';

describe('Example413Component', () => {
  let component: Example413Component;
  let fixture: ComponentFixture<Example413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
