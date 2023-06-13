import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.sass']
})
export class DrawerComponent implements AfterViewInit {

  @ViewChild('drawer') public drawer!: MatDrawer;
  drawerService: DrawerService = inject(DrawerService);

  constructor() {}

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer);
  }
}
