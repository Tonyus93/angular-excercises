import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwentyfiveComponent } from './exercise-twentyfive.component';

describe('ExerciseTwentyfiveComponent', () => {
  let component: ExerciseTwentyfiveComponent;
  let fixture: ComponentFixture<ExerciseTwentyfiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwentyfiveComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwentyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
