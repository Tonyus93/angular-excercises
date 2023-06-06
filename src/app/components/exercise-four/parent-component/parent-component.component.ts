import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.sass']
})
export class ParentComponentComponent {
  valueFromChild: string = '';

  changeText(value: string): void {
    this.valueFromChild = value;
  }
}
