import { Component, OnInit } from '@angular/core';

import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.sass']
})
export class ExerciseThreeComponent implements OnInit {
  constructor(public networkService: NetworkService) {}

  ngOnInit(): void {
    this.networkService.getData();
  }
}
