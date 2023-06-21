import { Component, OnDestroy } from '@angular/core';
import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twentyfour',
  templateUrl: './exercise-twentyfour.component.html',
  styleUrls: ['./exercise-twentyfour.component.sass']
})
export class ExerciseTwentyfourComponent implements OnDestroy {

  constructor(public controllerService: ControllerService) {}

  ngOnDestroy(): void {
    this.controllerService.unsubscribe();
  }
}
