import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRxjsComponent } from './basic-rxjs.component';

describe('BasicRxjsComponent', () => {
  let component: BasicRxjsComponent;
  let fixture: ComponentFixture<BasicRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
