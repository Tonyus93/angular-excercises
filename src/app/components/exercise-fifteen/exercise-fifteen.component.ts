import { Component } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';

@Component({
  selector: 'app-exercise-fifteen',
  templateUrl: './exercise-fifteen.component.html',
  styleUrls: ['./exercise-fifteen.component.sass']
})
export class ExerciseFifteenComponent {
  initialList: number[] = [1, 2, 3, 4, 5];
  listObs$: Observable<number[]> = of<number[]>(this.initialList)
    .pipe(map((list) => list.map((value) => value * 5)));
}
