import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from '../interfaces/state.interface';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  data$!: Observable<any>;
  subscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  getDataFromStore(): void {
    this.data$ = this.store;
    this.subscription = this.store.subscribe();
  }

  async dispatchAction(action: any): Promise<void> {
    this.store.dispatch(action);
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
