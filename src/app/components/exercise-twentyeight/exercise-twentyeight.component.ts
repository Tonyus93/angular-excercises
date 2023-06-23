import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { formDataAction } from './states/actions/exercise-twentyeight.actions';
import { ControllerService } from './services/controller.service';

@Component({
  selector: 'app-exercise-twentyeight',
  templateUrl: './exercise-twentyeight.component.html',
  styleUrls: ['./exercise-twentyeight.component.sass']
})
export class ExerciseTwentyeightComponent {
  constructor(
    private controllerService: ControllerService,
    private formBuilder: FormBuilder, 
    private router: Router, 
    private _activatedRoute: ActivatedRoute
  ) {}

  form = this.formBuilder.group({
    name: [''],
    age: [0],
  });

  onSubmit(): void {
    const action: any = formDataAction({
      name: this.form.value.name ?? '',
      age: this.form.value.age ?? 0
    });

    this.controllerService.dispatchAction(action).finally(() =>
      this.router.navigate(['result'], {relativeTo:this._activatedRoute})
    );
    ;
  }

}
