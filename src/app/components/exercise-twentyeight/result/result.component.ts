import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {

  constructor(public controllerService: ControllerService) {}

  ngOnInit(): void {
    this.controllerService.getDataFromStore();
  }
}
