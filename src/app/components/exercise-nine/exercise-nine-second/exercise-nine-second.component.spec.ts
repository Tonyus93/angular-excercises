import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNineSecondComponent } from './exercise-nine-second.component';

describe('ExerciseNineSecondComponent', () => {
  let component: ExerciseNineSecondComponent;
  let fixture: ComponentFixture<ExerciseNineSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseNineSecondComponent]
    });
    fixture = TestBed.createComponent(ExerciseNineSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
