import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarteComponentComponent } from './carte-component/carte-component.component';
import { CORE_CONCEPTS } from './data';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { EXAMPLES } from './data';



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,CarteComponentComponent,TabButtonComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  CORE_CONCEPTS =  CORE_CONCEPTS 
   data = EXAMPLES

 
}
