import { Component } from '@angular/core';
import { ScreenDetectorService } from './services/screen-detector.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-exercises';

  constructor(public screenDetectorService: ScreenDetectorService) {
    screenDetectorService.checkScreenWidth();
    screenDetectorService.screenWidthSubject$.next(window.innerWidth);
    fromEvent(window, 'resize').pipe(debounceTime(200),).subscribe((evt: any) => {
      screenDetectorService.screenWidthSubject$.next(evt.target.innerWidth);
    });
  }
}
