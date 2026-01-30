import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  randomWords=['Fundamental', 'Core', 'Crucial'];
  selectedWord!:string;
  ngOnInit(){
    const index= Math.floor(Math.random()*this.randomWords.length)
    this.selectedWord=this.randomWords[index]
  }

}
