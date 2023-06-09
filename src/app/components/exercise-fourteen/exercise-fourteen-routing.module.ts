import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from './result/result.component';
import { LoggedInGuard } from './guards/logged-in.guard';


const routes: Routes = [
  { path: 'exercise-14/route-1', component: ResultComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExerciseFourteenRoutingModule { }
