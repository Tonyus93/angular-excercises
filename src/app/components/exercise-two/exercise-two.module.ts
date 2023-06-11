import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { ExerciseTwoComponent } from './exercise-two.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ExerciseTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class ExerciseTwoModule { }
