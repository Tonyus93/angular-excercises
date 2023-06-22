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

const routes: Routes = [
{ path: 'exercise', children: [
  { path: '2', component: ExerciseTwoComponent },
  { path: '3', component: ExerciseThreeComponent },
  { path: '4', component: ExerciseFourComponent },
  { path: '5', component: ExerciseFiveComponent },
  { path: '6', component: ExerciseSixComponent },
  { path: '7', component: ExerciseSevenComponent },
  { path: '8', component: ExerciseEightComponent },
  { path: '9', component: ExerciseNineComponent },
  { path: '10', component: ExerciseTenComponent },
  { path: '11', component: ExerciseElevenComponent },
  { path: '12', component: ExerciseTwelveComponent },
  { path: '13', component: ExerciseThirteenComponent },
  { path: '14', component: ExerciseFourteenComponent },
  { path: '15', component: ExerciseFifteenComponent },
  { path: '16', component: ExerciseSixteenComponent },
  { path: '17', component: ExerciseSeventeenComponent },
  { path: '19', component: ExerciseNineteenComponent },
  { path: '20', component: ExerciseTwentyComponent },
  { path: '21', component: ExerciseTwentyoneComponent },
  { path: '22', component: ExerciseTwentytwoComponent },
  { path: '24', component: ExerciseTwentyfourComponent },
  { path: '25', component: ExerciseTwentyfiveComponent },
  { path: '26', component: ExerciseTwentysixComponent },
  { path: '27', loadChildren: () => import('../exercise-twentyseven/exercise-twentyseven.module')
    .then((m) => m.ExerciseTwentysevenModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesListRoutingModule { }