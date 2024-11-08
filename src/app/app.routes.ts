import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarPaginaComponent } from './adicionar-pagina/adicionar-pagina.component';
import { AdicionarPagina1Component } from './adicionar-pagina1/adicionar-pagina1.component';
import { HomeComponent } from './home/home.component';
import { AdicionarPagina2Component } from './adicionar-pagina2/adicionar-pagina2.component';

export const routes: Routes = [
  { path: 'adicionar-pagina', component: AdicionarPaginaComponent },
  { path: 'adicionar-pagina1', component: AdicionarPagina1Component },
  {path: 'adicionar-pagina2', component: AdicionarPagina2Component},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }