import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseTwoComponent } from './components/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './components/exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './components/exercise-four/exercise-four.component';


const routes: Routes = [
  { path: '', component: ExercisesListComponent },
  { path: 'exercise-2', component: ExerciseTwoComponent },
  { path: 'exercise-3', component: ExerciseThreeComponent },
  { path: 'exercise-4', component: ExerciseFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
