import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: 'exercise/28', children: [
    { path: 'result', component: ResultComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseTwentyeightRoutingModule { }