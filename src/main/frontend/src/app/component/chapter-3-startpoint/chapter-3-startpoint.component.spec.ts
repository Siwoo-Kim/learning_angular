import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3StartpointComponent } from './chapter-3-startpoint.component';

describe('Chapter3StartpointComponent', () => {
  let component: Chapter3StartpointComponent;
  let fixture: ComponentFixture<Chapter3StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
