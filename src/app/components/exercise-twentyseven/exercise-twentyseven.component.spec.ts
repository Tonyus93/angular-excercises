import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentysevenComponent } from './exercise-twentyseven.component';

describe('ExerciseTwentysevenComponent', () => {
  let component: ExerciseTwentysevenComponent;
  let fixture: ComponentFixture<ExerciseTwentysevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentysevenComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentysevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
