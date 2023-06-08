import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExercisesListModule } from './components/exercises-list/exercises-list.module';
import { ExerciseElevenComponent } from './components/exercise-eleven/exercise-eleven.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ExercisesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
