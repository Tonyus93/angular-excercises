import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExerciseTwoComponent } from './components/exercise-two/exercise-two.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseThreeComponent } from './components/exercise-three/exercise-three.component';

const routes: Routes = [
  { path: '', component: ExercisesListComponent },
  { path: 'exercise-2', component: ExerciseTwoComponent },
  { path: 'exercise-3', component: ExerciseThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
