import { NgModule } from '@angular/core';

import { ChildComponentFiveComponent } from './child-component/child-component.component';
import { ParentComponentFiveComponent } from './parent-component/parent-component.component';
import { ExerciseFiveComponent } from './exercise-five.component';

@NgModule({
  declarations: [
    ExerciseFiveComponent,
    ParentComponentFiveComponent,
    ChildComponentFiveComponent,
  ],
})
export class ExerciseFiveModule { }
