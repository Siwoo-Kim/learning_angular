import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2AppComponent } from './p2-app.component';

describe('P2AppComponent', () => {
  let component: P2AppComponent;
  let fixture: ComponentFixture<P2AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
