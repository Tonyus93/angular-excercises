import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  error$!: Observable<any>;
  subscription!: Subscription;

  constructor() { }

  getError(): void {
    this.error$ = throwError(() => new Error('Expected Error')).pipe(catchError((value) => of(value)));
    this.subscription = this.error$.subscribe();
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
