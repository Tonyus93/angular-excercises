import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExerciseTwentysevenComponent } from './exercise-twentyseven.component';

const routes: Routes = [
  { path: '', component: ExerciseTwentysevenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseTwentysevenRoutingModule { }