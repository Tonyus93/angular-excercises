import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ExerciseTwentyComponent } from './exercise-twenty.component';

@NgModule({
  declarations: [
    ExerciseTwentyComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ExerciseTwentyModule { }
