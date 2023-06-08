import { NgModule } from '@angular/core';

import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ExerciseFourComponent } from './exercise-four.component';

@NgModule({
  declarations: [
    ExerciseFourComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
})
export class ExerciseFourModule { }
