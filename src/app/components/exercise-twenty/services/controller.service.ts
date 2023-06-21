import { Injectable } from '@angular/core';
import { Observable, delay, of, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  first$!: Observable<string>;
  second$!: Observable<string>;
  combined$!: Observable<[string, string]>;

  constructor() { }

  runObservables(): void {
    this.first$ = of('first observable completed!').pipe(
      delay(1000)
    );
    this.second$ = of('second observable completed!').pipe(
      delay(3000)
    );

    this.combined$ = combineLatest([this.first$, this.second$]);
  }
}
