import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example414Component } from './example-4-14.component';

describe('Example414Component', () => {
  let component: Example414Component;
  let fixture: ComponentFixture<Example414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
