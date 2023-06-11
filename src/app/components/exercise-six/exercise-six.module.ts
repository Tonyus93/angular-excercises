import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseSixComponent } from './exercise-six.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ExerciseSixComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ExerciseSixModule { }
