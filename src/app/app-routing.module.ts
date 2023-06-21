import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
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
import { ExerciseThirteenComponent } from './components/exercise-thirteen/exercise-thirteen.component';
import { ExerciseFourteenComponent } from './components/exercise-fourteen/exercise-fourteen.component';
import { ExerciseFifteenComponent } from './components/exercise-fifteen/exercise-fifteen.component';
import { ExerciseSixteenComponent } from './components/exercise-sixteen/exercise-sixteen.component';
import { ExerciseSeventeenComponent } from './components/exercise-seventeen/exercise-seventeen.component';
import { ExerciseNineteenComponent } from './components/exercise-nineteen/exercise-nineteen.component';
import { ExerciseTwentyComponent } from './components/exercise-twenty/exercise-twenty.component';
import { ExerciseTwentyoneComponent } from './components/exercise-twentyone/exercise-twentyone.component';
import { ExerciseTwentytwoComponent } from './components/exercise-twentytwo/exercise-twentytwo.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'exercise-list', component: ExercisesListComponent },
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
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
