import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExerciseTwoComponent } from '../exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from '../exercise-three/exercise-three.component';
import { ExerciseFourComponent } from '../exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from '../exercise-five/exercise-five.component';
import { ExerciseSixComponent } from '../exercise-six/exercise-six.component';
import { ExerciseSevenComponent } from '../exercise-seven/exercise-seven.component';
import { ExerciseEightComponent } from '../exercise-eight/exercise-eight.component';
import { ExerciseNineComponent } from '../exercise-nine/exercise-nine.component';
import { ExerciseTenComponent } from '../exercise-ten/exercise-ten.component';
import { ExerciseElevenComponent } from '../exercise-eleven/exercise-eleven.component';
import { ExerciseTwelveComponent } from '../exercise-twelve/exercise-twelve.component';
import { ExerciseThirteenComponent } from '../exercise-thirteen/exercise-thirteen.component';
import { ExerciseFourteenComponent } from '../exercise-fourteen/exercise-fourteen.component';
import { ExerciseFifteenComponent } from '../exercise-fifteen/exercise-fifteen.component';
import { ExerciseSixteenComponent } from '../exercise-sixteen/exercise-sixteen.component';
import { ExerciseSeventeenComponent } from '../exercise-seventeen/exercise-seventeen.component';
import { ExerciseNineteenComponent } from '../exercise-nineteen/exercise-nineteen.component';
import { ExerciseTwentyComponent } from '../exercise-twenty/exercise-twenty.component';
import { ExerciseTwentyoneComponent } from '../exercise-twentyone/exercise-twentyone.component';
import { ExerciseTwentytwoComponent } from '../exercise-twentytwo/exercise-twentytwo.component';
import { ExerciseTwentyfourComponent } from '../exercise-twentyfour/exercise-twentyfour.component';
import { ExerciseTwentyfiveComponent } from '../exercise-twentyfive/exercise-twentyfive.component';
import { ExerciseTwentysixComponent } from '../exercise-twentysix/exercise-twentysix.component';
import { ExerciseTwentyeightComponent } from '../exercise-twentyeight/exercise-twentyeight.component';
import { ResultComponent } from '../exercise-twentyeight/result/result.component';

const routes: Routes = [
{ path: 'exercise', children: [
  { path: '2', component: ExerciseTwoComponent, pathMatch: 'full' },
  { path: '3', component: ExerciseThreeComponent, pathMatch: 'full' },
  { path: '4', component: ExerciseFourComponent, pathMatch: 'full' },
  { path: '5', component: ExerciseFiveComponent, pathMatch: 'full' },
  { path: '6', component: ExerciseSixComponent, pathMatch: 'full' },
  { path: '7', component: ExerciseSevenComponent, pathMatch: 'full' },
  { path: '8', component: ExerciseEightComponent, pathMatch: 'full' },
  { path: '9', component: ExerciseNineComponent, pathMatch: 'full' },
  { path: '10', component: ExerciseTenComponent, pathMatch: 'full' },
  { path: '11', component: ExerciseElevenComponent, pathMatch: 'full' },
  { path: '12', component: ExerciseTwelveComponent, pathMatch: 'full' },
  { path: '13', component: ExerciseThirteenComponent, pathMatch: 'full' },
  { path: '14', component: ExerciseFourteenComponent, pathMatch: 'full' },
  { path: '15', component: ExerciseFifteenComponent, pathMatch: 'full' },
  { path: '16', component: ExerciseSixteenComponent, pathMatch: 'full' },
  { path: '17', component: ExerciseSeventeenComponent, pathMatch: 'full' },
  { path: '19', component: ExerciseNineteenComponent, pathMatch: 'full' },
  { path: '20', component: ExerciseTwentyComponent, pathMatch: 'full' },
  { path: '21', component: ExerciseTwentyoneComponent, pathMatch: 'full' },
  { path: '22', component: ExerciseTwentytwoComponent, pathMatch: 'full' },
  { path: '24', component: ExerciseTwentyfourComponent, pathMatch: 'full' },
  { path: '25', component: ExerciseTwentyfiveComponent, pathMatch: 'full' },
  { path: '26', component: ExerciseTwentysixComponent, pathMatch: 'full' },
  { path: '27', loadChildren: () => import('../exercise-twentyseven/exercise-twentyseven.module')
    .then((m) => m.ExerciseTwentysevenModule) },
  { path: '28', component: ExerciseTwentyeightComponent, pathMatch: 'full' },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesListRoutingModule { }
