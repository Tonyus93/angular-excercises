import { NgModule } from '@angular/core';
import { RandomColorDirective } from './directives/random-color.directive';

@NgModule({
  declarations: [
    RandomColorDirective,
  ],
  exports: [
    RandomColorDirective,
  ]
})
export class ExerciseEightModule { }
