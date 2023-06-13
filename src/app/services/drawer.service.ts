import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  drawer!: MatDrawer;
  isOpen: boolean = false;

  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    this.drawer.toggle();
  }
}
