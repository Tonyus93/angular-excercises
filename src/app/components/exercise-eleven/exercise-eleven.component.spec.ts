import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseElevenComponent } from './exercise-eleven.component';

describe('ExerciseElevenComponent', () => {
  let component: ExerciseElevenComponent;
  let fixture: ComponentFixture<ExerciseElevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseElevenComponent]
    });
    fixture = TestBed.createComponent(ExerciseElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
