import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEightComponent } from './exercise-eight.component';

describe('ExerciseEightComponent', () => {
  let component: ExerciseEightComponent;
  let fixture: ComponentFixture<ExerciseEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseEightComponent]
    });
    fixture = TestBed.createComponent(ExerciseEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
