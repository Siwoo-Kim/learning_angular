import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example821Component } from './example-8-2-1.component';

describe('Example821Component', () => {
  let component: Example821Component;
  let fixture: ComponentFixture<Example821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
