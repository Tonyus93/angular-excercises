import { NgModule } from '@angular/core';

import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@NgModule({
  declarations: [
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  exports: [
    ParentComponentComponent,
    ChildComponentComponent,
  ]
})
export class ExerciseTwoModule { }
