import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStartpointComponent } from './project-startpoint.component';

describe('ProjectStartpointComponent', () => {
  let component: ProjectStartpointComponent;
  let fixture: ComponentFixture<ProjectStartpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStartpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStartpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
