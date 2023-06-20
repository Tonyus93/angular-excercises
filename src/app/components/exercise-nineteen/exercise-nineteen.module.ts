import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ExerciseNineteenComponent } from './exercise-nineteen.component';
import { ControllerService } from './services/controller.service';

@NgModule({
  declarations: [
    ExerciseNineteenComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    ControllerService
  ],
})
export class ExerciseNineteenModule { }
