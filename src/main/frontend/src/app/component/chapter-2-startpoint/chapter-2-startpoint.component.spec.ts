import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2StartpointComponent } from './chapter-2-startpoint.component';

describe('Chapter2StartpointComponent', () => {
  let component: Chapter2StartpointComponent;
  let fixture: ComponentFixture<Chapter2StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
