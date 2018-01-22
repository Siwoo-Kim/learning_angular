import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2ProductParamComponent } from './chapter-2-product-param.component';

describe('Chapter2ProductParamComponent', () => {
  let component: Chapter2ProductParamComponent;
  let fixture: ComponentFixture<Chapter2ProductParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2ProductParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2ProductParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
