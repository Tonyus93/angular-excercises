import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {
  colors: string[] = ['yellow', 'red', 'blue', 'orange', 'pink', 'purple'];

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 
      this.colors[Math.floor(Math.random() * this.colors.length)];;
  }

}
