import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example821ChildComponent } from './example-8-2-1-child.component';

describe('Example821ChildComponent', () => {
  let component: Example821ChildComponent;
  let fixture: ComponentFixture<Example821ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example821ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example821ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
