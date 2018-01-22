import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2ChildComponent } from './chapter-2-child.component';

describe('Chapter2ChildComponent', () => {
  let component: Chapter2ChildComponent;
  let fixture: ComponentFixture<Chapter2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
