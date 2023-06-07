import { NgModule } from '@angular/core';

import { ChildComponentFiveComponent } from './child-component/child-component.component';
import { ParentComponentFiveComponent } from './parent-component/parent-component.component';

@NgModule({
  declarations: [
    ParentComponentFiveComponent,
    ChildComponentFiveComponent,
  ],
  exports: [
    ParentComponentFiveComponent,
    ChildComponentFiveComponent,
  ]
})
export class ExerciseFiveModule { }
