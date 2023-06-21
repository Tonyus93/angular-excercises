import { Component } from '@angular/core';
import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twenty',
  templateUrl: './exercise-twenty.component.html',
  styleUrls: ['./exercise-twenty.component.sass']
})
export class ExerciseTwentyComponent {
  constructor (public controllerService: ControllerService) {}
}
