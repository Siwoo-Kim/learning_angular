import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPracticeComponent } from './reactive-form-practice.component';

describe('ReactiveFormPracticeComponent', () => {
  let component: ReactiveFormPracticeComponent;
  let fixture: ComponentFixture<ReactiveFormPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
