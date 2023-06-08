import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-ten',
  templateUrl: './exercise-ten.component.html',
  styleUrls: ['./exercise-ten.component.sass']
})
export class ExerciseTenComponent {
  displayTemplate: boolean = false;

  toggleDisplayTemplate(): void {
    this.displayTemplate = !this.displayTemplate;
  }
}
