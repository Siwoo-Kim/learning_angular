import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitNgOnDestroyComponent } from './ng-on-init-ng-on-destroy.component';

describe('NgOnInitNgOnDestroyComponent', () => {
  let component: NgOnInitNgOnDestroyComponent;
  let fixture: ComponentFixture<NgOnInitNgOnDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnInitNgOnDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnInitNgOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
