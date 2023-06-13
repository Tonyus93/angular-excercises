import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BehaviorSubject, fromEvent, distinctUntilChanged, debounceTime } from 'rxjs';
import { NOLAN_FILMS } from './constants/nolan-films';

@Component({
  selector: 'app-exercise-sixteen',
  templateUrl: './exercise-sixteen.component.html',
  styleUrls: ['./exercise-sixteen.component.sass']
})

export class ExerciseSixteenComponent implements AfterViewInit {
  @ViewChild('input', { static: false }) input!: ElementRef;
  filmListObs$: BehaviorSubject<any> = new BehaviorSubject([]);

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup')
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
      )
      .subscribe(() => this.filterFilm()
      );
  }

  filterFilm(): void {
    this.filmListObs$.next(NOLAN_FILMS.filter(
      (film) => film.includes(this.input.nativeElement.value)));
  }
}
