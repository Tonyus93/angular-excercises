import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ExerciseElevenComponent } from './exercise-eleven.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ExerciseElevenComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ExerciseElevenModule { }
