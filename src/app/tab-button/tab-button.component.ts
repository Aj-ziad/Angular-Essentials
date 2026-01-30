import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [],
  templateUrl: './tab-button.component.html',
  styleUrl: './tab-button.component.css'
})
export class TabButtonComponent {
  @Input() active: boolean = false;
  @Input() label!: string;
  @Output() event = new EventEmitter<void>();

  onClick(){
    // this.active = !this.active
    this.event.emit();
  }

}
