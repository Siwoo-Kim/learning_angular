import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTitleComponent } from './example-title.component';

describe('ExampleTitleComponent', () => {
  let component: ExampleTitleComponent;
  let fixture: ComponentFixture<ExampleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
