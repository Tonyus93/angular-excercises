import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-six',
  templateUrl: './exercise-six.component.html',
  styleUrls: ['./exercise-six.component.sass']
})
export class ExerciseSixComponent {
  displayComponent: boolean = false;

  toggleComponent(): void {
    this.displayComponent = !this.displayComponent;
  }
}
