import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentyoneComponent } from './exercise-twentyone.component';

describe('ExerciseTwentyoneComponent', () => {
  let component: ExerciseTwentyoneComponent;
  let fixture: ComponentFixture<ExerciseTwentyoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentyoneComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
