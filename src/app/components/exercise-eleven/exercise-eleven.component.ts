import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise-eleven',
  templateUrl: './exercise-eleven.component.html',
  styleUrls: ['./exercise-eleven.component.sass']
})
export class ExerciseElevenComponent {
  nameValue?: string = '';
  ageValue?: string = '';

  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
  });

  onSubmit(): void {
    this.nameValue = this.form.value.name ?? '';
    this.ageValue = this.form.value.age ?? '';
  }
}
