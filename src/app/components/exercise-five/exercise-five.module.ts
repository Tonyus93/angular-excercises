import { NgModule } from '@angular/core';

import { ChildComponentFiveComponent } from './child-component/child-component.component';
import { ParentComponentFiveComponent } from './parent-component/parent-component.component';
import { ExerciseFiveComponent } from './exercise-five.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ExerciseFiveComponent,
    ParentComponentFiveComponent,
    ChildComponentFiveComponent,
  ],
  imports: [
    MatCardModule
  ]
})
export class ExerciseFiveModule { }
