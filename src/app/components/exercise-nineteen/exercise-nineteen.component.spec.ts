import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNineteenComponent } from './exercise-nineteen.component';

describe('ExerciseNineteenComponent', () => {
  let component: ExerciseNineteenComponent;
  let fixture: ComponentFixture<ExerciseNineteenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseNineteenComponent]
    });
    fixture = TestBed.createComponent(ExerciseNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
