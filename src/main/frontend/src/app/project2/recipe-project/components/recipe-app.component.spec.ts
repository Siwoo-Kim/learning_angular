import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAppComponent } from './recipe-app.component';

describe('RecipeAppComponent', () => {
  let component: RecipeAppComponent;
  let fixture: ComponentFixture<RecipeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
