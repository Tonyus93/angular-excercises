import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseSixteenComponent } from './exercise-sixteen.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    ExerciseSixteenComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class ExerciseSixteenModule { }
