import { Component } from '@angular/core';
import { Observable, delay, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-exercise-seventeen',
  templateUrl: './exercise-seventeen.component.html',
  styleUrls: ['./exercise-seventeen.component.sass']
})
export class ExerciseSeventeenComponent {
  obs1$: Observable<number> = of(1).pipe(delay(1000));
  obs2$: Observable<number> = of(2).pipe(delay(2000));
  obs3$: Observable<number> = of(3).pipe(delay(3000));
  timer: number = Date.now();
  timerEnd: any = 'Fetching result';

  constructor() {
    forkJoin([
      this.obs1$,
      this.obs2$,
      this.obs3$
    ]).subscribe(() => {
      this.timerEnd = new Date(Date.now() - this.timer).getTime() / 1000;
    });
  }
}
