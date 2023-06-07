import { NgModule } from '@angular/core';

import { ExerciseNineFirstComponent } from './exercise-nine-first/exercise-nine-first.component';
import { ExerciseNineSecondComponent } from './exercise-nine-second/exercise-nine-second.component';
import { ExerciseNineRoutingModule } from './exercise-nine-routing.module';

@NgModule({
  declarations: [
    ExerciseNineFirstComponent, 
    ExerciseNineSecondComponent
  ],
  exports: [
    ExerciseNineRoutingModule
  ]
})
export class ExerciseNineModule { }
