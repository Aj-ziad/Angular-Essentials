import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-component',
  standalone: true,
  imports: [],
  templateUrl: './carte-component.component.html',
  styleUrl: './carte-component.component.css'
})
export class CarteComponentComponent {
  @Input({required: true }) Image!: string;
  @Input({required: true }) title!: string;
  @Input({required: true }) description!: string;
}
