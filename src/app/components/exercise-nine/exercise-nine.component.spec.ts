import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNineComponent } from './exercise-nine.component';

describe('ExerciseNineComponent', () => {
  let component: ExerciseNineComponent;
  let fixture: ComponentFixture<ExerciseNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseNineComponent]
    });
    fixture = TestBed.createComponent(ExerciseNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
