import { NgModule } from '@angular/core';

import { ExerciseFourteenRoutingModule } from './exercise-fourteen-routing.module';
import { ResultComponent } from './result/result.component';
import { ExerciseFourteenComponent } from './exercise-fourteen.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ExerciseFourteenComponent,
    ResultComponent
  ],
  imports: [
    ExerciseFourteenRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ExerciseFourteenModule { }
