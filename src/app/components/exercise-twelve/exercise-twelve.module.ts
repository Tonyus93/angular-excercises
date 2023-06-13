import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExerciseTwelveComponent } from './exercise-twelve.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ExerciseTwelveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ]
})
export class ExerciseTwelveModule { }
