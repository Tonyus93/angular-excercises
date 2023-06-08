import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExerciseTwoComponent } from '../exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from '../exercise-three/exercise-three.component';
import { ExerciseFourModule } from '../exercise-four/exercise-four.module';
import { ExerciseFourComponent } from '../exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from '../exercise-five/exercise-five.component';
import { ExerciseFiveModule } from '../exercise-five/exercise-five.module';
import { ExerciseSixComponent } from '../exercise-six/exercise-six.component';
import { ExerciseSevenComponent } from '../exercise-seven/exercise-seven.component';
import { ExerciseEightComponent } from '../exercise-eight/exercise-eight.component';
import { ExerciseEightModule } from '../exercise-eight/exercise-eight.module';
import { ExerciseNineComponent } from '../exercise-nine/exercise-nine.component';
import { ExerciseNineModule } from '../exercise-nine/exercise-nine.module';
import { ExerciseTenComponent } from '../exercise-ten/exercise-ten.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExerciseElevenComponent } from '../exercise-eleven/exercise-eleven.component';
import { ExerciseTwelveComponent } from '../exercise-twelve/exercise-twelve.component';
import { UppercaseSymbolPipe } from '../exercise-thirteen/pipes/uppercase-symbol.pipe';
import { ExerciseThirteenComponent } from '../exercise-thirteen/exercise-thirteen.component';
import { ExerciseThirteenModule } from '../exercise-thirteen/exercise-thirteen.module';

@NgModule({
  declarations: [
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    ExerciseFiveComponent,
    ExerciseSixComponent,
    ExerciseSevenComponent,
    ExerciseEightComponent,
    ExerciseNineComponent,
    ExerciseTenComponent,
    ExerciseElevenComponent,
    ExerciseTwelveComponent,
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExerciseFourModule,
    ExerciseFiveModule,
    ExerciseEightModule,
    ExerciseNineModule,
    ExerciseThirteenModule
  ],
})
export class ExercisesListModule { }
