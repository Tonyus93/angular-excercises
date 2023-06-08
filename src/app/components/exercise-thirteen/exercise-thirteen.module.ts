import { NgModule } from '@angular/core';
import { UppercaseSymbolPipe } from './pipes/uppercase-symbol.pipe';
import { ExerciseThirteenComponent } from './exercise-thirteen.component';

@NgModule({
    declarations: [
        ExerciseThirteenComponent,
        UppercaseSymbolPipe
    ],
    exports: [
        ExerciseThirteenComponent
    ]
})
export class ExerciseThirteenModule { }
