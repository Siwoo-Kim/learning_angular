import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLoggerComponent } from './testing-logger.component';

describe('TestingLoggerComponent', () => {
  let component: TestingLoggerComponent;
  let fixture: ComponentFixture<TestingLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
