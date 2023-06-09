import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFourteenComponent } from './exercise-fourteen.component';

describe('ExerciseFourteenComponent', () => {
  let component: ExerciseFourteenComponent;
  let fixture: ComponentFixture<ExerciseFourteenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseFourteenComponent]
    });
    fixture = TestBed.createComponent(ExerciseFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
