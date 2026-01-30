import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarteComponentComponent } from './carte-component/carte-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarteComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-essentials';
}
