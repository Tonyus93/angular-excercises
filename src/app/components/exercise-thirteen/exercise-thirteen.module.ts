import { NgModule } from '@angular/core';

import { UppercaseSymbolPipe } from './pipes/uppercase-symbol.pipe';
import { ExerciseThirteenComponent } from './exercise-thirteen.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ExerciseThirteenComponent,
        UppercaseSymbolPipe
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        ExerciseThirteenComponent,
    ]
})
export class ExerciseThirteenModule { }
