import { Component, OnInit } from '@angular/core';
import { take, first, last } from 'rxjs';

import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twentyone',
  templateUrl: './exercise-twentyone.component.html',
  styleUrls: ['./exercise-twentyone.component.sass']
})
export class ExerciseTwentyoneComponent implements OnInit {
  take!: string;
  first!: string;
  last!: string;

  constructor(public controllerService: ControllerService) {
    this.take = '';
  }

  ngOnInit(): void {
    this.controllerService.example$.pipe(take(2)).subscribe((value) => {
      this.take += value;
    });

    this.controllerService.example$.pipe(first()).subscribe((value) => {
      this.first = value;
    });

    this.controllerService.example$.pipe(last()).subscribe((value) => {
      this.last = value;
    });
  }
}
