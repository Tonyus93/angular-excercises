import { Component } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';
import { ScreenDetectorService } from 'src/app/services/screen-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(public screenDetectorService: ScreenDetectorService, public drawerService: DrawerService) {}
}
