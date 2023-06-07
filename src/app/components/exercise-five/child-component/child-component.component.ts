import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-5',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.sass']
})
export class ChildComponentFiveComponent implements OnInit {
  @Input() valueFromParent: string = '';
  @Output() valueFromChild = new EventEmitter<string>();

  ngOnInit() {
    this.valueFromChild.emit('Value from Child!');
  }
}
