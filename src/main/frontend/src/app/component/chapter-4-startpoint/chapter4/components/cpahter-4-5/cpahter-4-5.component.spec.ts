import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpahter45Component } from './cpahter-4-5.component';

describe('Cpahter45Component', () => {
  let component: Cpahter45Component;
  let fixture: ComponentFixture<Cpahter45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpahter45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpahter45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
