import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{titol}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" routerLink="/inici" routerLinkActive="active">Inici</a>
        <a class="nav-item nav-link" routerLink="/cerca" routerLinkActive="active">Cerca</a>
        <a class="nav-item nav-link" routerLink="/preferits" routerLinkActive="active">Preferits</a>
      </div>
    </div>
  </nav>
    <router-outlet></router-outlet>
`

})
export class Menu_encaminamentComponent {
  titol = 'Biblioteca de Webcomics';

}
