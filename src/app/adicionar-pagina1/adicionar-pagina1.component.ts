import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pagina1',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './adicionar-pagina1.component.html',
  styleUrl: './adicionar-pagina1.component.scss'
})
export class AdicionarPagina1Component {
  constructor(private router: Router) { }

  Home() {
    this.router.navigate([''])
  }


}
