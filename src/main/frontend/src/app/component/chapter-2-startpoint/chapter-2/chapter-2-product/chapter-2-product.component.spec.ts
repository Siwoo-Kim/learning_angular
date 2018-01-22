import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2ProductComponent } from './chapter-2-product.component';

describe('Chapter2ProductComponent', () => {
  let component: Chapter2ProductComponent;
  let fixture: ComponentFixture<Chapter2ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
