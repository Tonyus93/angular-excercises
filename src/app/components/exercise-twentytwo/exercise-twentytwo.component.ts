import { Component, OnDestroy } from '@angular/core';
import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twentytwo',
  templateUrl: './exercise-twentytwo.component.html',
  styleUrls: ['./exercise-twentytwo.component.sass']
})
export class ExerciseTwentytwoComponent implements OnDestroy {

  constructor(public controllerService: ControllerService) {}

  ngOnDestroy(): void {
    this.controllerService.unsubscribe();
  }
}
