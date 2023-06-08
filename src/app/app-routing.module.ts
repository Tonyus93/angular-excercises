import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseTwoComponent } from './components/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './components/exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './components/exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from './components/exercise-five/exercise-five.component';
import { ExerciseSixComponent } from './components/exercise-six/exercise-six.component';
import { ExerciseSevenComponent } from './components/exercise-seven/exercise-seven.component';
import { ExerciseEightComponent } from './components/exercise-eight/exercise-eight.component';
import { ExerciseNineComponent } from './components/exercise-nine/exercise-nine.component';
import { ExerciseTenComponent } from './components/exercise-ten/exercise-ten.component';
import { ExerciseElevenComponent } from './components/exercise-eleven/exercise-eleven.component';
import { ExerciseTwelveComponent } from './components/exercise-twelve/exercise-twelve.component';


const routes: Routes = [
  { path: '', component: ExercisesListComponent },
  { path: 'exercise-2', component: ExerciseTwoComponent },
  { path: 'exercise-3', component: ExerciseThreeComponent },
  { path: 'exercise-4', component: ExerciseFourComponent },
  { path: 'exercise-5', component: ExerciseFiveComponent },
  { path: 'exercise-6', component: ExerciseSixComponent },
  { path: 'exercise-7', component: ExerciseSevenComponent },
  { path: 'exercise-8', component: ExerciseEightComponent },
  { path: 'exercise-9', component: ExerciseNineComponent },
  { path: 'exercise-10', component: ExerciseTenComponent },
  { path: 'exercise-11', component: ExerciseElevenComponent },
  { path: 'exercise-12', component: ExerciseTwelveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
