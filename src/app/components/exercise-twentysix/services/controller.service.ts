import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor() { }

  resolvePromise(): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve('completed'), 3000));
  }

  async getValue(): Promise<void> {
    console.log(await this.resolvePromise());
  }
}
