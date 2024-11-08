import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warning-cards',
  standalone: true,
  imports: [],
  templateUrl: './warning-cards.component.html',
  styleUrl: './warning-cards.component.scss'
})

export class WarningCardsComponent {
  constructor(private router: Router) { }

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) text!: string;
  @Input({ required: true }) link: string = '';

  redirectToPage() {
    this.router.navigate([this.link])
  }

}
