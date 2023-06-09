import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-exercise-fourteen',
  templateUrl: './exercise-fourteen.component.html',
  styleUrls: ['./exercise-fourteen.component.sass']
})
export class ExerciseFourteenComponent {
  constructor(public authService: AuthService) {}

}
