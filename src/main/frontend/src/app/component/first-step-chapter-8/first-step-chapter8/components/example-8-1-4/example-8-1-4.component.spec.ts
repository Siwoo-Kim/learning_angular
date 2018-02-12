import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example814Component } from './example-8-1-4.component';

describe('Example814Component', () => {
  let component: Example814Component;
  let fixture: ComponentFixture<Example814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
