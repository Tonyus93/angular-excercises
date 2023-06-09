import { NgModule } from '@angular/core';

import { ExerciseFourteenRoutingModule } from './exercise-fourteen-routing.module';
import { ResultComponent } from './result/result.component';
import { ExerciseFourteenComponent } from './exercise-fourteen.component';



@NgModule({
  declarations: [
    ExerciseFourteenComponent,
    ResultComponent
  ],
  imports: [
    ExerciseFourteenRoutingModule
  ]
})
export class ExerciseFourteenModule { }
