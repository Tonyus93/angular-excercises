import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseSevenComponent } from './exercise-seven.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ExerciseSevenComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class ExerciseSevenModule { }
