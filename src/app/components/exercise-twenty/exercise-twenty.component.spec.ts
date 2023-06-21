import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentyComponent } from './exercise-twenty.component';

describe('ExerciseTwentyComponent', () => {
  let component: ExerciseTwentyComponent;
  let fixture: ComponentFixture<ExerciseTwentyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentyComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
