import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseTwoComponent } from './components/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './components/exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './components/exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from './components/exercise-five/exercise-five.component';
import { ExerciseSixComponent } from './components/exercise-six/exercise-six.component';


const routes: Routes = [
  { path: '', component: ExercisesListComponent },
  { path: 'exercise-2', component: ExerciseTwoComponent },
  { path: 'exercise-3', component: ExerciseThreeComponent },
  { path: 'exercise-4', component: ExerciseFourComponent },
  { path: 'exercise-5', component: ExerciseFiveComponent },
  { path: 'exercise-6', component: ExerciseSixComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
