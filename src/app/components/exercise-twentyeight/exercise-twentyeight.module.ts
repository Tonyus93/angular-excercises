import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseTwentyeightComponent } from './exercise-twentyeight.component';
import { StoreModule } from '@ngrx/store';
import { formDataReducer } from './states/reducers/exercise-twentyeight.reducer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { RouterModule } from '@angular/router';
import { ExerciseTwentyeightRoutingModule } from './exercise-twentyeight-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ExerciseTwentyeightComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    ExerciseTwentyeightRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot({ formData: formDataReducer}),
  ],
})
export class ExerciseTwentyeightModule { }
