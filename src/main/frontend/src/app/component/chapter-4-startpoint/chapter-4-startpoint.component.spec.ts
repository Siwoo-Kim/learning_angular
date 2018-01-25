import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4StartpointComponent } from './chapter-4-startpoint.component';

describe('Chapter4StartpointComponent', () => {
  let component: Chapter4StartpointComponent;
  let fixture: ComponentFixture<Chapter4StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter4StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
