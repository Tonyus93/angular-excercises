import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { RouterModule } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DrawerService } from 'src/app/services/drawer.service';



@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    DrawerComponent
  ],
})
export class DrawerModule { }
