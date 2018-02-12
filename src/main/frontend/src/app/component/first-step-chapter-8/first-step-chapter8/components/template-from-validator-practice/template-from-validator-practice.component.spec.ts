import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFromValidatorPracticeComponent } from './template-from-validator-practice.component';

describe('TemplateFromValidatorPracticeComponent', () => {
  let component: TemplateFromValidatorPracticeComponent;
  let fixture: ComponentFixture<TemplateFromValidatorPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFromValidatorPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFromValidatorPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
