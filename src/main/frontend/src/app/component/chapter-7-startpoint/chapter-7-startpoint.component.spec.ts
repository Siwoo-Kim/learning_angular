import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter7StartpointComponent } from './chapter-7-startpoint.component';

describe('Chapter7StartpointComponent', () => {
  let component: Chapter7StartpointComponent;
  let fixture: ComponentFixture<Chapter7StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter7StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter7StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
