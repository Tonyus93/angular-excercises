import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.sass']
})
export class ChildComponentComponent implements OnInit {
  @Input() valueFromParent: string = '';
  @Output() valueFromChild = new EventEmitter<string>();

  ngOnInit() {
    this.valueFromChild.emit('Value from Child!');
  }
}
