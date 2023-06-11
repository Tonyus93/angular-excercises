import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.sass']
})
export class ExerciseTwoComponent {
  value!: string;

  clearValue() {
    this.value = '';
  }
}
