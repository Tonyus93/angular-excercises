import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentytwoComponent } from './exercise-twentytwo.component';

describe('ExerciseTwentytwoComponent', () => {
  let component: ExerciseTwentytwoComponent;
  let fixture: ComponentFixture<ExerciseTwentytwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentytwoComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
