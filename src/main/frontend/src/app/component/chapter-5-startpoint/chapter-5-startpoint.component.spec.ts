import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5StartpointComponent } from './chapter-5-startpoint.component';

describe('Chapter5StartpointComponent', () => {
  let component: Chapter5StartpointComponent;
  let fixture: ComponentFixture<Chapter5StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter5StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
