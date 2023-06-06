import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseTwoComponent } from '../exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from '../exercise-three/exercise-three.component';
import { ExerciseFourModule } from '../exercise-four/exercise-four.module';
import { ExerciseFourComponent } from '../exercise-four/exercise-four.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExerciseFourModule,
  ],
  exports: [
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent
  ]
})
export class ExercisesListModule { }