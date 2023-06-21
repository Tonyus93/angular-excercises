import { Component, OnInit } from '@angular/core';

import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twentysix',
  templateUrl: './exercise-twentysix.component.html',
  styleUrls: ['./exercise-twentysix.component.sass']
})
export class ExerciseTwentysixComponent implements OnInit {
  value!: string;

  constructor(public controllerService: ControllerService) {}

  ngOnInit(): void {
    this.controllerService.getValue();
  }
}
