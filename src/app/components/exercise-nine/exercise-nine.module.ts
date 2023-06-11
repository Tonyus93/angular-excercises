import { NgModule } from '@angular/core';

import { ExerciseNineFirstComponent } from './exercise-nine-first/exercise-nine-first.component';
import { ExerciseNineSecondComponent } from './exercise-nine-second/exercise-nine-second.component';
import { ExerciseNineRoutingModule } from './exercise-nine-routing.module';
import { ExerciseNineComponent } from './exercise-nine.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ExerciseNineComponent,
    ExerciseNineFirstComponent, 
    ExerciseNineSecondComponent,
  ],
  imports: [
    ExerciseNineRoutingModule,
    MatButtonModule
  ],
})
export class ExerciseNineModule { }
