import { Component, OnDestroy } from '@angular/core';
import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twentyfive',
  templateUrl: './exercise-twentyfive.component.html',
  styleUrls: ['./exercise-twentyfive.component.sass']
})
export class ExerciseTwentyfiveComponent implements OnDestroy {

  constructor(public controllerService: ControllerService) {}

  ngOnDestroy(): void {
    this.controllerService.unsubscribe();
  }
}
