import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


import { TabButtonComponent } from './tab-button/tab-button.component';
import { EXAMPLES } from './data';



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet ,HeaderComponent] ,

  imports: [RouterOutlet,CarteComponentComponent,TabButtonComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  

  data = EXAMPLES
  title = 'angular-essentials';

}
