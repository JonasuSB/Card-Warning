import { Component } from '@angular/core';
import { WarningCardsComponent } from '../warning-cards/warning-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WarningCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
