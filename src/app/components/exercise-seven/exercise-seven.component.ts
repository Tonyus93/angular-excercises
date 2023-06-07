import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-seven',
  templateUrl: './exercise-seven.component.html',
  styleUrls: ['./exercise-seven.component.sass']
})
export class ExerciseSevenComponent {
  display: boolean = true;
  items:string[] = ['One', 'Two', 'Three'];
}
