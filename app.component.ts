import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoArabicDirective } from './directives/no-arabic.directive';
import { NoNumbersDirective } from './directives/no-numbers.directive';
import { NoSpecialCharDirective } from './directives/no-special-char.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NoArabicDirective,NoNumbersDirective, NoSpecialCharDirective  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
