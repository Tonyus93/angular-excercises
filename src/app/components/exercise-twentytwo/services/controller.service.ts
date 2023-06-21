import { Injectable } from '@angular/core';
import { Subscription, Observable, timer, takeUntil, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  timer$!: Observable<number>;
  numbers$!: Observable<number>;
  subscription!: Subscription;

  constructor() {}

  getNumbers(): void {
    this.timer$ = timer(5000);
    this.numbers$ = interval(1000).pipe(takeUntil(this.timer$),);

    this.subscription = this.numbers$.subscribe({
        complete: () => this.unsubscribe()
      }
    );
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
