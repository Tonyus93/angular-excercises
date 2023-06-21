import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  example$: Observable<string> = of('first', 'second', 'third');

  constructor() { }
}
