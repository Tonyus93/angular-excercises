import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseThreeComponent } from './exercise-three.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ExerciseThreeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ExerciseThreeModule { }
