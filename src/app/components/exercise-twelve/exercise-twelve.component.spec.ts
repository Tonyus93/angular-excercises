import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwelveComponent } from './exercise-twelve.component';

describe('ExerciseTwelveComponent', () => {
  let component: ExerciseTwelveComponent;
  let fixture: ComponentFixture<ExerciseTwelveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwelveComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
