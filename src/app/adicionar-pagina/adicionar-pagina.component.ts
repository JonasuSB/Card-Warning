import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adicionar-pagina',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './adicionar-pagina.component.html',
  styleUrl: './adicionar-pagina.component.scss'
})
export class AdicionarPaginaComponent {
  constructor(private router: Router) { }

  Home() {
    this.router.navigate([''])
  }


}
