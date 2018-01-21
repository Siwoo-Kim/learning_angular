import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1StartpointComponent } from './chapter-1-startpoint.component';

describe('Chapter1StartpointComponent', () => {
  let component: Chapter1StartpointComponent;
  let fixture: ComponentFixture<Chapter1StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter1StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
