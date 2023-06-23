import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentyeightComponent } from './exercise-twentyeight.component';

describe('ExerciseTwentyeightComponent', () => {
  let component: ExerciseTwentyeightComponent;
  let fixture: ComponentFixture<ExerciseTwentyeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentyeightComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentyeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
