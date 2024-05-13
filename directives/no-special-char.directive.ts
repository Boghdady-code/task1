import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSpecialChar]',
  standalone: true
})
export class NoSpecialCharDirective {

  constructor() { }
  @HostListener ('keydown', ['$event'])
  @HostListener ('paste', ['$event']) 
  @HostListener('drop', ['$event'])
   onKeydown(event: KeyboardEvent)  {

    console.log(event)
    if (event.key.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g)) {
      event.preventDefault();
    }

  }

  

}
