import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoArabic]',
  standalone: true
})
export class NoArabicDirective {

  constructor() { }
  @HostListener ('keydown', ['$event'])
  @HostListener ('paste', ['$event']) 
  @HostListener ('drop', ['$event'])
   onKeydown(event: KeyboardEvent) {
    if (event.key.match(/[\u0600-\u06FF]/g)) {
      event.preventDefault();
    }
  }
 

}
