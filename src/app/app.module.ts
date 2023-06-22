import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './components/content/content.module';
import { ExercisesListModule } from './components/exercises-list/exercises-list.module';
import { HeaderModule } from './components/header/header.module';
import { DrawerModule } from './components/drawer/drawer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ExercisesListModule,
    ContentModule,
    BrowserAnimationsModule,
    MatDividerModule,
    HeaderModule,
    MatSidenavModule,
    DrawerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
