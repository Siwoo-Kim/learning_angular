import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2ParentComponent } from './chapter-2-parent.component';

describe('Chapter2ParentComponent', () => {
  let component: Chapter2ParentComponent;
  let fixture: ComponentFixture<Chapter2ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
