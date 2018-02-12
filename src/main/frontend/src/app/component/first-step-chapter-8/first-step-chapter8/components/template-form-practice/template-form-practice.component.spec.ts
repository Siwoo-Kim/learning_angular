import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormPracticeComponent } from './template-form-practice.component';

describe('TemplateFormPracticeComponent', () => {
  let component: TemplateFormPracticeComponent;
  let fixture: ComponentFixture<TemplateFormPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
