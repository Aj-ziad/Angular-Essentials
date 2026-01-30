import { Component } from '@angular/core';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { EXAMPLES } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = EXAMPLES
  title = 'angular-essentials';
}
