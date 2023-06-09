import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExercisesListComponent } from './exercises-list.component';
import { ExerciseTwoModule } from '../exercise-two/exercise-two.module';
import { ExerciseThreeModule } from '../exercise-three/exercise-three.module';
import { ExerciseFourModule } from '../exercise-four/exercise-four.module';
import { ExerciseFiveModule } from '../exercise-five/exercise-five.module';
import { ExerciseSixModule } from '../exercise-six/exercise-six.module';
import { ExerciseSevenModule } from '../exercise-seven/exercise-seven.module';
import { ExerciseEightModule } from '../exercise-eight/exercise-eight.module';
import { ExerciseNineModule } from '../exercise-nine/exercise-nine.module';
import { ExerciseTenModule } from '../exercise-ten/exercise-ten.module';
import { ExerciseElevenModule } from '../exercise-eleven/exercise-eleven.module';
import { ExerciseTwelveModule } from '../exercise-twelve/exercise-twelve.module';
import { ExerciseThirteenModule } from '../exercise-thirteen/exercise-thirteen.module';
import { ExerciseFourteenModule } from '../exercise-fourteen/exercise-fourteen.module';

@NgModule({
  declarations: [
    ExercisesListComponent
  ],
  imports: [
    RouterModule,
    ExerciseTwoModule,
    ExerciseThreeModule,
    ExerciseFourModule,
    ExerciseFiveModule,
    ExerciseSixModule,
    ExerciseSevenModule,
    ExerciseEightModule,
    ExerciseNineModule,
    ExerciseTenModule,
    ExerciseElevenModule,
    ExerciseTwelveModule,
    ExerciseThirteenModule,
    ExerciseFourteenModule
  ],
})
export class ExercisesListModule { }
