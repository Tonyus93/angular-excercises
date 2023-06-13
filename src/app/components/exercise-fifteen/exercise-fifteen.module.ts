import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseFifteenComponent } from './exercise-fifteen.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ExerciseFifteenComponent,
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class ExerciseFifteenModule { }
