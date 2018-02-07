import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCounterComponent } from './simple-counter.component';

describe('SimpleCounterComponent', () => {
  let component: SimpleCounterComponent;
  let fixture: ComponentFixture<SimpleCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
