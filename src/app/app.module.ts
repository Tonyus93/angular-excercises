import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule } from './components/content/content.module';
import { ExercisesListModule } from './components/exercises-list/exercises-list.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { MatListModule } from '@angular/material/list';
import { DrawerComponent } from './components/drawer/drawer.component';
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
    MatListModule,
    DrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
