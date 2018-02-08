import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example425Component } from './example-4-2-5.component';

describe('Example425Component', () => {
  let component: Example425Component;
  let fixture: ComponentFixture<Example425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
