import { NgModule } from '@angular/core';

import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ExerciseFourComponent } from './exercise-four.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ExerciseFourComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  imports: [
    MatCardModule
  ]
})
export class ExerciseFourModule { }
