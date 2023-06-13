import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenDetectorService {
  isMobile!: boolean;
  screenWidthSubject$: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  constructor() { }

  checkScreenWidth(): void {
    this.screenWidthSubject$.subscribe((value) => {
      if (value <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
