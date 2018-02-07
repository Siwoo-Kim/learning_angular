import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExample421Component } from './example-4-2-1.component';

describe('AppExample421Component', () => {
  let component: AppExample421Component;
  let fixture: ComponentFixture<AppExample421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExample421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExample421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
