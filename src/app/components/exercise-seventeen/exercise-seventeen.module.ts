import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseSeventeenComponent } from './exercise-seventeen.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ExerciseSeventeenComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class ExerciseSeventeenModule { }
