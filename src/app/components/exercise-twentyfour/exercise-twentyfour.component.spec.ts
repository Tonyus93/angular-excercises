import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentyfourComponent } from './exercise-twentyfour.component';

describe('ExerciseTwentyfourComponent', () => {
  let component: ExerciseTwentyfourComponent;
  let fixture: ComponentFixture<ExerciseTwentyfourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentyfourComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentyfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
