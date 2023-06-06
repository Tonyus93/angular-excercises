import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseTwoModule } from '../exercise-two/exercise-two.module';
import { ExerciseTwoComponent } from '../exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from '../exercise-three/exercise-three.component';

@NgModule({
  declarations: [
    ExerciseTwoComponent,
    ExerciseThreeComponent
  ],
  imports: [
    CommonModule,
    ExerciseTwoModule,
  ],
  exports: [
    ExerciseTwoComponent,
    ExerciseThreeComponent
  ]
})
export class ExercisesListModule { }