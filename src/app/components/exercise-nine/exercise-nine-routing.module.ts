import { NgModule } from '@angular/core';
import { ROUTES, RouterModule } from '@angular/router';

import { ExerciseNineFirstComponent } from './exercise-nine-first/exercise-nine-first.component';
import { ExerciseNineSecondComponent } from './exercise-nine-second/exercise-nine-second.component';

@NgModule({
  providers: [
    {
      provide: ROUTES,
      useFactory: () => {
        if (Math.random() < 0.5) {
          return [
            { path: 'exercise-9/result', component: ExerciseNineFirstComponent },
          ]
        } else {
          return [
            { path: 'exercise-9/result', component: ExerciseNineSecondComponent },
          ]
        }
      },
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class ExerciseNineRoutingModule { }
