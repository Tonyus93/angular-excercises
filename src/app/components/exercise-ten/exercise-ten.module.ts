import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseTenComponent } from './exercise-ten.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ExerciseTenComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ExerciseTenModule { }
