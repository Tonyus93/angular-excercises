import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciseTwoComponent } from '../exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from '../exercise-three/exercise-three.component';
import { ExerciseFourModule } from '../exercise-four/exercise-four.module';
import { ExerciseFourComponent } from '../exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from '../exercise-five/exercise-five.component';
import { ExerciseFiveModule } from '../exercise-five/exercise-five.module';
import { ExerciseSixComponent } from '../exercise-six/exercise-six.component';
import { ExerciseSevenComponent } from '../exercise-seven/exercise-seven.component';

@NgModule({
  declarations: [
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    ExerciseFiveComponent,
    ExerciseSixComponent,
    ExerciseSevenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExerciseFourModule,
    ExerciseFiveModule,
  ],
  exports: [
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    ExerciseFiveComponent,
    ExerciseSixComponent,
    ExerciseSevenComponent,
  ]
})
export class ExercisesListModule { }
