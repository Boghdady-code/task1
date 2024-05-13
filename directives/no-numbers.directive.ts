import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoNumbers]',
  standalone: true
})
export class NoNumbersDirective {

  constructor() { }
  @HostListener ('keydown', ['$event'])
  @HostListener ('paste', ['$event']) 
   onKeydown(event: KeyboardEvent) {
    if(event.key.match(/\d+/g)) {
      event.preventDefault(); 
    }
  }

 

}
