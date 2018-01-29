import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter6StartpointComponent } from './chapter-6-startpoint.component';

describe('Chapter6StartpointComponent', () => {
  let component: Chapter6StartpointComponent;
  let fixture: ComponentFixture<Chapter6StartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter6StartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter6StartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
