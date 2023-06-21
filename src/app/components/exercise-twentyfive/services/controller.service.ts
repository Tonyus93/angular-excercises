import { Injectable } from '@angular/core';
import { Observable, Subscription, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  error$!: Observable<any>;
  subscription!: Subscription;

  constructor() { }

  getError(): void {
    this.error$ = throwError(() => new Error('Expected Error'));
    this.subscription = this.error$.subscribe({
      error: (error) => console.log(error)
    });
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
