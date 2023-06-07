import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNineFirstComponent } from './exercise-nine-first.component';

describe('ExerciseNineFirstComponent', () => {
  let component: ExerciseNineFirstComponent;
  let fixture: ComponentFixture<ExerciseNineFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseNineFirstComponent]
    });
    fixture = TestBed.createComponent(ExerciseNineFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
