import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, distinctUntilChanged, debounceTime, switchMap } from 'rxjs';

import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-nineteen',
  templateUrl: './exercise-nineteen.component.html',
  styleUrls: ['./exercise-nineteen.component.sass']
})
export class ExerciseNineteenComponent implements AfterViewInit {
  @ViewChild('input', { static: false }) input!: ElementRef;

  constructor(public controllerService: ControllerService) { }

  ngAfterViewInit(): void {
    this.controllerService.gameListObs$ = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup')
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        switchMap((value) => this.controllerService.filterGames(this.input.nativeElement.value)),
      );
  }
}
