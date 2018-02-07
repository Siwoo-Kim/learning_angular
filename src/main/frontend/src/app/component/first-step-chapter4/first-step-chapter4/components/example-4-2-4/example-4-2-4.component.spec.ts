import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example424Component } from './example-4-2-4.component';

describe('Example424Component', () => {
  let component: Example424Component;
  let fixture: ComponentFixture<Example424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
