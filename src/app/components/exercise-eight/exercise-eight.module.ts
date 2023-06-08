import { NgModule } from '@angular/core';

import { RandomColorDirective } from './directives/random-color.directive';
import { ExerciseEightComponent } from './exercise-eight.component';

@NgModule({
  declarations: [
    ExerciseEightComponent,
    RandomColorDirective,
  ],
  exports: [
    RandomColorDirective,
  ]
})
export class ExerciseEightModule { }
