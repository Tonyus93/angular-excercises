import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentysixComponent } from './exercise-twentysix.component';

describe('ExerciseTwentysixComponent', () => {
  let component: ExerciseTwentysixComponent;
  let fixture: ComponentFixture<ExerciseTwentysixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentysixComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentysixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
