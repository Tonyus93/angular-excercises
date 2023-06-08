import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTenComponent } from './exercise-ten.component';

describe('ExerciseTenComponent', () => {
  let component: ExerciseTenComponent;
  let fixture: ComponentFixture<ExerciseTenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTenComponent]
    });
    fixture = TestBed.createComponent(ExerciseTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
